<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <header>
      <main-header />
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import MainHeader from '@/MainHeader'

/*
 * Root component
 */
export default {
  components: { MainHeader }
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
