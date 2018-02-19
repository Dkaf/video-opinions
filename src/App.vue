<template lang="pug">
  #app
    main-header(v-if="this.$route.path != '/admin' && this.$route.path != '/admin/dashboard'")
    router-view
</template>

<script>
import MainHeader from './components/MainHeader'
import { mapActions } from 'vuex'
export default {
  name: 'app',
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
