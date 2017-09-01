<template>
	<div class="component article">
		<h1 class="title">{{ this.selected.title }}</h1>
		<span class="date">{{ this.selected.date }}</span>
		<p class="review-content">{{ this.selected.review }}</p>
		<div class="container">
		</div>
	</div>
</template>

<script>
import store from '../store'

export default {
  name: 'review',
	props: ['selected']
}
</script>
<style>
</style>
