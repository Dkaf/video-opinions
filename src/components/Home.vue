<template>
	<div class="home">
		<h1 class="title">Good Opinions About Terrible Videos</h1>
		<div class="container newest">
			<h2 class="subtitle">Newest</h2>
			<span class="date">8/14/17</span>
			<iframe width="854" height="480" src="https://www.youtube.com/embed/N2VwIfi6LoY" frameborder="0" allowfullscreen></iframe>
		</div>
	</div>
</template>


<script>
export default {
	name: 'home'
}
</script>

<style>
  .title {
	  font-size: 3em;
  }
  .section {
	  height: 350px;
	  width: 500px;
	  border-radius: 2%;
	  /* border: solid 1px black; */
	  background-color: lightgrey;
	  margin: 0 auto;
  }
  .date {
	  display: block;
	  font-size: 1.5em;
	  font-weight: bold;
  }

</style>
