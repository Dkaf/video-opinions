<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <main-header />
  </div>
</template>

<script>
import MainHeader from '@/MainHeader'
import { mapActions } from 'vuex'
/*
 * Root component
 */
export default {
  components: { MainHeader },
  methods: {
    ...mapActions([
      'updateReviewList'
    ])
  },
  created: function () {
    this.updateReviewList()
  }
}
</script>

<style lang="stylus">
@import '~variables'

main
  text-align center
  margin-top 40px

header
  margin 0
  height 10px
  background-color $primary
</style>
