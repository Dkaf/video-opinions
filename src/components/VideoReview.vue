<template>
  <div class="layout-padding">
    <h1>{{ name }}</h1>
    <span>{{ selected.date }}</span>
    <q-video v-if="selected.type === 'youtube'" src="selected.media" alt="YouTube Player" />
    <img v-if="selected.type === 'movie'" class="responsive" src="selected.media" alt="Movie Poster" />
    <p>{{ selected.review }}</p>
  </div>
</template>

<script>
import { QVideo } from 'quasar'
export default {
  name: 'VideoReview',
  props: {
    name: String
  },
  components: { QVideo },
  computed: {
    selected: function () {
      return this.$store.getters.getReview(this.name)
    }
  }
}
</script>

<style lang="stylus">
</style>
