<template lang="pug">
	.nav
		router-link.nav-link(to='/movies') Movies
		router-link.nav-link(to='/games') Games
		router-link.nav-link(to='/youtube') YouTube
		router-link.nav-link(to='/about') Us
</template>
<script>
export default {
	name: 'navigation'
}
</script>

<style lang="stylus">
	.nav
		text-align: center
		padding-top: 40px

	.nav-link
		color: black
		text-decoration: none
		font-size: 2.1em
		cursor: pointer
		margin-right: 30px
		&:hover
			text-decoration: underline
			text-decoration-color: #00d8ff
		&::selection
			color: black
</style>
