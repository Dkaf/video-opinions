<template>
	<div class="component main-header">
		<navigation></navigation>
	</div>
</template>

<script>
	import Navigation from "./Navigation"
	export default {
		name: 'main-header',
		components: { Navigation }
	}
</script>

<style>
	.main-header {
		background: white;
		width: 100%;
		height: 150px;
		position: absolute;
	}
</style>