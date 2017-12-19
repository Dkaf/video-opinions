<template lang="pug">
.component.main-header
  router-link.home-link(to='/')
    h1.main-title Pats' Unsolicited Opinions About...
  navigation
</template>

<script>
	import Navigation from "./Navigation"
	export default {
		name: 'main-header',
		components: { Navigation }
	}
</script>

<style lang="stylus">
	.main-header
		width: 100%
		height: 300px
		top: 0
		left: 0
		overflow-x: hidden
		margin-bottom: 30px
		.home-link 
			color: black
			text-decoration: none
			.main-title
				font-size: 3em
				font-weight: normal
</style>