import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { GET_FILMS, SELECT_FILM } from './types'

Vue.use(VueAxios, axios)
Vue.use(Vuex)

const url = 'http://www.omdbapi.com/?apikey=d4ca208d'

export default new Vuex.Store({
  state: {
    films: [],
    selectedFilm: {}
  },
  mutations: {
    [GET_FILMS]: (state, payload) => {
      const movies = []
      payload.forEach(movie => {
        movies.push(movie)
        state.films = movies
      })
    },
    [SELECT_FILM]: (state, payload) => {
      state.selectedFilm = payload
    }
  },
  actions: {
    [GET_FILMS]: async ({ commit }, text) => {
      await axios.get(`${url}&s=${text}`)
        .then(resp => {
          commit(GET_FILMS, resp.data.Search)
        })
    },
    [SELECT_FILM]: async ({ commit }, item) => {
      await axios.get(`${url}&t=${item}`)
        .then(resp => {
          commit(SELECT_FILM, resp.data)
        })
    }
  },
  getters: {
    get_films: state => state.films,
    get_movie_info: state => state.selectedFilm
  },
  modules: {
  }
})
