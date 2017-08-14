<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
  name: 'app',
  components: { Navigation }
}
</script>

<style>
html {
  height: 100%;
  background: url('./assets/ep_naturalwhite.png') center;
}
#app {
  height: 100%;
  width: 100%;
  font-family: 'Playfair Display', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;

}
</style>
