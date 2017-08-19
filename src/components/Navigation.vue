<template>
	<div class="nav">
		<router-link class="nav-link" to='/'>Home</router-link>
		<router-link class="nav-link" to='/archive'>Archive</router-link>
		<router-link class="nav-link" to='/about'>About</router-link>
	</div>
</template>
<script>
export default {
	name: 'navigation'
}
</script>

<style>
	.nav {
		top: 0px;
		left: 0px;
		position: absolute;
		text-align: right;
		height: 100px;
		background: white;
	}
	.nav-link {
		color: black;
		text-decoration: none;
		font-size: 1.2em;
		cursor: pointer;
		margin-right: 8px;
	}
	.nav-link::selection {
		color: black;
	}
  
</style>
