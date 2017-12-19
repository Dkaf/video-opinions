<template lang="pug">
  .archive
    h1.subtitle Archive
    button.filter-button(v-on:click="displayed = !displayed") Filters
    .filter-list(:hidden="displayed")
      span.filter-option YouTube
      span.filter-option Movies
    span Showing: {{ selected }}
    preview
</template>

<script>
import Preview from './Preview'
import store from '../store'

export default {
  name: 'archive',
  data () {
    return {
      reviews: store.state.reviews,
      selected: '',
      displayed: true
    }
  },
  components: {
    Preview
  }
} 

</script>

<style lang="stylus">
  background = white
  hover-background = #EFEFEF
  shadow = 1px 1px 1px 1px grey

  .subtitle
    font-size: 1.2em
  .filter-button
    width: 135px
    height: 40px
    font-size: 1.4em
    display: block
    margin: 0 auto
    border: none
    border-radius: 3px
    box-shadow: shadow
    background-color: background
    cursor: pointer
    &:hover, &:focus
      background-color: hover-background
    &:focus
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
  .filter-list
    background-color: background
    position: relative
    width: 135px
    margin: 0 auto
    box-shadow: shadow
  .filter-option
    display: block
</style>
