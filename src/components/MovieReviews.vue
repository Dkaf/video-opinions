<template>
  <div class="layout-padding">
    <movie-card :reviews="reviews" />
  </div>
</template>

<script>
import MovieCard from './MovieCard'
export default {
  data () {
    return {}
  },
  components: { MovieCard },
  computed: {
    reviews: function () {
      return this.$store.getters.movieReviews
    }
  }
}
</script>

<style lang="stylus">
</style>
