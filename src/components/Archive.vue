<template>
  <div class="archive">
	  <h1 class="title">Archive</h1>
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
</style>
