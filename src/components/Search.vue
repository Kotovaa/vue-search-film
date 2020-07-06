<template>
  <div class="search">
    <label for="search-field">
      <input type="text" v-model="searchText" id="search-field">
    </label>
    <button class="search__button" @click="search">Search</button>
  </div>
</template>

<script>
import { GET_FILMS } from '../store/types'

export default {
  name: 'Search',
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    search () {
      this.$store.dispatch(GET_FILMS, this.searchText)
    }
  }
}
</script>

<style scoped>

</style>
