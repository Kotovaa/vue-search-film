<template>
  <div class="movie">
    <h3 class="movie__title" @click="changeRoute(name)">{{ name }}</h3>
    <img :src="img" alt="">
    <p>{{ year }}</p>
  </div>
</template>

<script>
import { SELECT_FILM } from '../store/types'

export default {
  name: 'Movie',
  props: {
    name: String,
    img: String,
    year: String
  },
  methods: {
    changeRoute (title) {
      this.$store.dispatch(SELECT_FILM, title)
      this.$router.push({ path: '/movie/' + title })
    }
  }
}
</script>

<style scoped lang="scss">
  .movie {
    padding: 5px 25px 10px 25px;
    max-width: 25%;
  }
  @media screen and (min-width: 694px) and (max-width: 915px) {
    .movie {
      max-width: 33%;
    }
  }
  @media screen and (min-width: 652px) and (max-width: 693px) {
    .movie {
      max-width: 50%;
    }
  }
  @media screen and (max-width: 651px) {
    .movie {
      max-width: 100%;
      margin: auto;
    }
  }
</style>
