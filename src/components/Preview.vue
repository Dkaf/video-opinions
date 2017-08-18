<template>
	<div class="component preview">
		<div class="container preview-container"  v-for="review in reviews">
			<router-link to="/review" class="link">
				<span class="subtitle">{{ review.title }}</span>
			</router-link>
			<span class="preview-date">{{ review.date }}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'preview',
		data () {
			return {
				reviews: [
					{
						title: 'Birdemic 2',
						date: '9/9/99'
					},
					{
						title: 'Birdemic',
						date: '9/8/99'
					},
					{
						title: 'Troll 2',
						date: '9/7/99'
					}
				]
			}
		}
	}
</script>

<style>
	.link {
		color: black;
		text-decoration: none;
	}
	.link::active {
		color: black;
	}
	.preview-date {
		font-size: 1.1em;
		text-align: center;
		margin-left: 15px;
	}
	.preview-container {
		margin-bottom: 15px;
	}
</style>