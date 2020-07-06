<template>
    <div class="selectedMovie">
      <img :src="selectedItem.Poster" alt="">
      <p>{{ selectedItem.Title }}</p>
      <p>{{ selectedItem.Actors }}</p>
      <p>{{ selectedItem.Country }}</p>
      <p>{{ selectedItem.Plot }}</p>
      <p>{{ selectedItem.Released }}</p>
      <p>{{ selectedItem.Runtime }}</p>
    </div>
</template>

<script>
export default {
  name: 'Film',
  computed: {
    selectedItem () {
      return this.$store.getters.get_movie_info
    }
  }
}
</script>

<style scoped>

</style>
