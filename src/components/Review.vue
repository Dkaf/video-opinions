<template lang="pug">
	.component.article
		h1.title {{ this.selected.title }}
		span.date {{ this.selected.date }}
		p.review-content {{ this.selected.review }}
</template>

<script>
export default {
  name: 'review',
	props: ['selected']
}
</script>
<style>
</style>
