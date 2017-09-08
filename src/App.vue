<template>
  <div id="app">
    <main-header></main-header>
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader'
export default {
  name: 'app',
  components: { MainHeader }
}
</script>

<style>
html {
  height: 100%;
}
#app {
  height: 100%;
  width: 100%;
  font-family: 'Encode Sans Semi Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;

}
</style>
