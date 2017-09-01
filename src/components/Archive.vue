<template>
  <div class="archive">
	  <h1 class="title">Archive</h1>
	  <button class="filter-button" v-on:click="displayed = !displayed">Filters</button>
	  <div class="filter-list" :hidden="displayed">
		  <span class="filter-option">YouTube</span>
		  <span class="filter-option" v-on:click="">Movies</span>
	  </div>
	  <span> Showing: {{ selected }}</span>
	  <preview></preview>
  </div>
</template>

<script>
import Preview from './Preview'
import store from '../store'

export default {
	name: 'archive',
	data () {
		return {
			reviews: store.state.reviews,
			selected: '',
			displayed: true
		}
	},
	components: {
		Preview
	}
} 

</script>

<style>
	.subtitle {
		font-size: 1.2em;
	}
	.filter-button {
		width: 135px;
		height: 40px;
		font-size: 1.4em;
		display: block;
		margin: 0 auto;
		border: none;
		border-radius: 3px;
		box-shadow: 1px 1px 1px 1px grey;
		background-color: white;
		cursor: pointer;
	}
	.filter-button:hover, .filter-button:focus  {
		background-color: #EFEFEF;
	}
	.filter-button:focus {
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 0px;
	}
	.filter-list {
		background-color: white;
		position: relative;
		width: 135px;
		margin: 0 auto;
		box-shadow: 1px 1px 1px 1px grey;
	}
	.filter-option {
		display: block;
	}
</style>
