<template>
	<div class="home">
		<h1 class="title">Newest</h1>
		<div class="card-row">
			<movie-card></movie-card>
		</div>
	</div>
</template>


<script>
import MovieCard from './MovieCard'
export default {
	name: 'home',
	components: { MovieCard }
}
</script>

<style>
  .title {
	  font-size: 3em;
  }
  .card-row {
	  width: 880px;
	  margin: 0 auto;
  }
  .section {
	  height: 350px;
	  width: 500px;
	  border-radius: 2%;
	  /* border: solid 1px black; */
	  background-color: lightgrey;
	  margin: 0 auto;
  }

</style>
