<template>
	<div class="component preview">
		<div class="container preview-container" v-for="review in data.reviews" v-bind:review="review" v-bind:key="review.id">
			<span class="subtitle" v-on:click="data.selectedVideo = review, data.displayed = !displayed">{{ review.title }}</span>
			<span class="preview-date">{{ review.date }}</span>
		</div>
		<div class="container router-container" :hidden="!data.displayed">
		<router-link :to="{ name: 'Review', params: {selected: data.selectedVideo} }" class="link">
			<button class="review-button">Full Article</button>
		</router-link>
		</div>
		<div>{{ data.selectedVideo }}</div>
	</div>
</template>

<script>
	import store from '../store.js';

	export default {
		name: 'preview',
		data () {
			return {
				data: {
					store: store,
					reviews: store.state.reviews,
					selectedVideo: store.state.selectedVideo,
					displayed: false,
\				}
			}
		}
	}
</script>

<style>
	.link {
		color: black;
		text-decoration: none;
	}
	.link::active {
		color: black;
	}
	.preview-date {
		font-size: 1.1em;
		text-align: center;
		margin-left: 15px;
	}
	.preview-container {
		margin-bottom: 15px;
		cursor: pointer;
	}
</style>