<template>
  <div>
    <h1>{{ this.selected.title }}</h1>
    <span>{{ name }}</span>
    <p>{{ this.selected.review }}</p>
  </div>
</template>

<script>
export default {
  name: 'VideoReview',
  props: {
    name: String
  },
  data () {
    return {}
  }
}
</script>

<style lang="stylus">
</style>
