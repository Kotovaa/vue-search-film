<template>
  <div class="films">
    <Search />
    <div class="films__result">
      <Movie v-for="(i, index) in films" :key="index" :name="i.Title" :year="i.Year" :img="i.Poster" />
    </div>
  </div>
</template>

<script>
import Movie from '@/components/Movie.vue'
import Search from '@/components/Search'

export default {
  name: 'Home',
  components: {
    Search,
    Movie
  },
  computed: {
    films () {
      return this.$store.getters.get_films
    }
  }
}
</script>

<style lang="scss">
  .films {
    &__result {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
</style>
