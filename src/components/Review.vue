<template lang="pug">
	.component.article
		movie(v-if="selected.type === 'movie'")
		youtube(v-if="selected.type === 'youtube'")
		h1.title {{ this.selected.title }}
		span.date {{ this.selected.date }}
		p.review-content {{ this.selected.review }}
</template>

<script>
import Youtube from './Youtube'
import Movie from './Movie'
export default {
  name: 'review',
	props: ['name'],
	components: { Movie, Youtube },
	computed: {
		selected: function() {
			return this.$store.getters.getReview(this.name)
		}
	}
}
</script>
<style>
</style>
