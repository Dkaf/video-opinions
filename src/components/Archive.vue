<template>
  <div class="archive">
	  <h1 class="title">Archive</h1>
		<select class="video-filter">
			<option>YouTube</option>
			<option>Movies</option>
		</select>
		<preview></preview>
  </div>
</template>

<script>
import Preview from './Preview'

export default {
	name: 'archive',
	components: {
		Preview
	}
} 

</script>

<style>
	.subtitle {
		font-size: 1.2em;
	}
	.video-filter {
		width: 250px;
		height: 75px;
		font-size: 1.4em;
		text-align: center;
	}
</style>
