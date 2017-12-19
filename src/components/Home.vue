<template lang="pug">
	.home
		.card-row
			movie-card(:reviews="reviews")
</template>


<script>
import MovieCard from './MovieCard'
export default {
	name: 'home',
	components: { MovieCard },
	computed: {
    reviews: function() {
      return this.$store.state.reviews
    }
  }
}
</script>

<style lang="stylus">
  .title
	  font-size: 3em

  .card-row
	  width: 880px
	  margin: 0 auto
	  text-align: center

  .section
	  height: 350px
	  width: 500px
	  border-radius: 2%
	  /* border: solid 1px black; */
	  background-color: lightgrey
	  margin: 0 auto

</style>
