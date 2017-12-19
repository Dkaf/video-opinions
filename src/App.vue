<template lang="pug">
  #app
    main-header
    router-view
</template>

<script>
import MainHeader from './components/MainHeader'
import { mapActions } from 'vuex'
import axios from 'axios'
export default {
  name: 'app',
  components: { MainHeader },
  methods: {
    ...mapActions([
      'updateReviewList'
    ])
  },
  created: function () {
	  this.$store.dispatch('updateReviewList');
	}
}
</script>

<style lang="stylus">
font = 'Encode Sans Semi Condensed', sans-serif

html, #app
  height: 100%
#app
  width: 100%
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: black
  margin-top: 60px
  &,button
    font-family: font
</style>
