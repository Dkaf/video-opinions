<template lang="pug">
	.component.preview
		.container.preview-container(v-for='review in data.reviews', v-bind:review='review', v-bind:key='review.id')
			span.subtitle(v-on:click='data.selectedVideo = review, data.displayed = !displayed') {{ review.title }}
			span.preview-date {{ review.date }}
		.container.router-container(:hidden='!data.displayed')
			router-link.link(:to="{ name: 'Review', params: {selected: data.selectedVideo} }")
				button.review-button Full Article
		div {{ data.selectedVideo }}
</template>

<script>
	export default {
		name: 'preview',
		data () {
			return {
				data: {
					store: store,
					reviews: store.state.reviews,
					selectedVideo: store.state.selectedVideo,
					displayed: false,
				}
			}
		}
	}
</script>

<style lang="stylus">
	.link
		text-decoration: none
		&,&::active
			color: black;

	.preview-date
		font-size: 1.1em
		text-align: center
		margin-left: 15px

	.preview-container
		margin-bottom: 15px
		cursor: pointer
</style>