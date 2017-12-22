<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-padding">
    <movie-card :reviews="reviews"/>
  </div>
</template>

<script>
import MovieCard from './MovieCard'
export default {
  name: 'HomePage',
  components: { MovieCard },
  computed: {
    reviews: function () {
      return this.$store.state.reviews
    }
  }
}
</script>

<style lang="stylus">
</style>
