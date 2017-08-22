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
						date: '9/9/99',
						youtube: false,
						thumbnail: 'url',
						review: 'adknfkdn ansdfklasdn nkdnfokasdjf'
					},
					{
						title: 'Birdemic',
						date: '9/8/99',
						youtube: false
					},
					{
						title: 'Troll 2',
						date: '9/7/99',
						youtube: false
					},
					{
						title: 'Cow Chop',
						date: '9/6/99',
						youtube: true
					},
					{
						title: 'MFpallytime',
						date: '9/5/99',
						youtube: true
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