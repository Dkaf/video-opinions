<template>
	<div class="component main-header">
		<router-link class="home-link" to='/'>
			<h1 class="main-title">Dan and Pats' Unsolicited Opinions About...</h1>
		</router-link>
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
		height: 300px;
		top: 0;
		left: 0;
		overflow-x: hidden;
		margin-bottom: 30px;
	}
	.main-title {
		font-size: 3em;
		font-weight: normal;
	}
	.home-link {
		color: black;
		text-decoration: none;
	}
</style>