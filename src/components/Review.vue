<template>
	<div class="component article">
		<h1 class="title">{{ title }}</h1>
		<span class="date">{{ date }}</span>
		<div class="container">
			<youtube></youtube>
			<movie></movie>		
		</div>
	</div>
</template>

<script>
import Youtube from './Youtube'
import Movie from './Movie'

export default {
  name: 'article',
  data () {
	  return {
		 title: "placeholder",
		 date: "8/14/17"
	  }
  },
  components: {
	  Youtube,
	  Movie
  }
}
</script>
