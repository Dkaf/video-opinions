<template>
	<div class="card">
		<div class="container card-container" v-for="review in reviews" v-bind:key="review.id">
			<router-link :to="{name: 'Review', params: {selected: review}}">
				<h2 class="subtitle">{{ review.title }}</h2>
				<!-- <span class="date">{{ review.date }}</span>
				<img class="thumbnail" src="../assets/home-background.jpg"> -->
			</router-link>
		</div>
	</div>
</template>

<script>
	import store from '../store'
	export default {
		name: 'movie-card',
		data () {
			return {
				reviews: store.state.reviews
			}
		}
	}
</script>

<style>
	.card {
		left: 50%;
		transform: translate(-50%, 0);
		position: absolute;
	}

	.card-container {
		position: relative;
		text-align: left;
	}

	.card-container a {
		color: black;
		text-decoration: none;
	}

	.subtitle {
		margin: 0;
		font-size: 3em;
		font-weight: bolder;
	}

	.subtitle::after {
		content: '!';
	}

	.subtitle:hover {
		text-decoration: underline;
		text-decoration-color: #00d8ff;
	}

	.date {
	  display: block;
	  font-size: 1.2em;
	  font-weight: bold;
	  margin-bottom: 5px;
    }

	.thumbnail {
	  width: auto;
	  max-width: 550px;
	  height: auto;
	  max-height: 200px;
    }
</style>
