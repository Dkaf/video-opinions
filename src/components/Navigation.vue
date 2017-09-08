<template>
	<div class="nav">
		<router-link class="nav-link" to='/movies'>Movies</router-link>
		<router-link class="nav-link" to='/games'>Games</router-link>
		<router-link class="nav-link" to='/youtube'>YouTube</router-link>
		<router-link class="nav-link" to='/about'>Us</router-link>
	</div>
</template>
<script>
export default {
	name: 'navigation'
}
</script>

<style>
	.nav {
		text-align: center;
		padding-top: 40px;
	}
	.nav-link {
		color: black;
		text-decoration: none;
		font-size: 2.1em;
		cursor: pointer;
		margin-right: 30px;
	}
	.nav-link:hover {
		text-decoration: underline;
		text-decoration-color: #00d8ff;
	}
	.nav-link::selection {
		color: black;
	}
  
</style>
