<template>
  <div>
    <div v-for="review in reviews" v-bind:key="review.id" >
      <router-link :to="{name: 'Review', params: {name: review.title}}">
        <h2>{{review.title}}</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    reviews: Array
  },
  data () {
    return {}
  }
}
</script>

<style lang="stylus">
</style>
