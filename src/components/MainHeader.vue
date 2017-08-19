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
		width: 100%;
		height: 75px;
		top: 0;
		left: 0;
		overflow-x: hidden;
	}
</style>