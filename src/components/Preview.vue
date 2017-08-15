<template>
	<div class="component preview">
		<h2 class="subtitle">{{ title }}</h2>
		<span class="date">{{ date }}</span>
	</div>
</template>

<script>
	export default {
		name: 'preview',
		data () {
			return {
				title: 'Example Title',
				date: '9/9/99'
			}
		}
	}
</script>