<template>
	<div class="card">
		<div class="container card-container" v-for="review in reviews" v-bind:key="review.id">
			<router-link :to="{name: 'Review', params: {selected: review}}">
				<h2 class="subtitle">{{ review.title }}</h2>
				<span class="date">{{ review.date }}</span>
				<img class="thumbnail" src="../assets/home-background.jpg">
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
	.card-container {
	box-shadow: 0px 2px 10px 3px grey;
	background-color: white;
	border-radius: 10px;
	width: 400px;
	height: 400px;
	margin: 20px;
	display: inline-block;
	}

	.card-container:hover {
		background-color: #ededed;
	}

	.card-container a {
		color: black;
		text-decoration: none;
	}

	.date {
	  display: block;
	  font-size: 1.2em;
	  font-weight: bold;
	  margin-bottom: 5px;
    }

	.thumbnail {
	  width: auto;
	  max-width: 350px;
	  height: auto;
	  max-height: 250px;
  }
</style>
