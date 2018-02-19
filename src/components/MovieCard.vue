<template lang="pug">
  .card
    .container.card-container(v-for='review in reviews', v-bind:key='review.id')
      router-link(:to="{name: 'Review', params: {name: review.title}}")
        h2.subtitle {{ review.title }}
        //
          <span class="date">{{ review.date }}</span>
          <img class="thumbnail" src="../assets/home-background.jpg">
</template>

<script>
  export default {
    name: 'movie-card',
    props: ['reviews']
  }
</script>

<style lang="stylus">
  .card
    left: 50%
    transform: translate(-50%, 0)
    position: absolute

  .card-container
    position: relative
    text-align: left
    a 
      color: black;
      text-decoration: none;

  .subtitle
    margin: 0
    font-size: 3em
    font-weight: bolder
    &::after
      content: '!';
    &:hover
      text-decoration: underline;
      text-decoration-color: #00d8ff;

  .date
    display: block
    font-size: 1.2em
    font-weight: bold
    margin-bottom: 5px

  .thumbnail
    width: auto
    max-width: 550px
    height: auto
    max-height: 200px
</style>
