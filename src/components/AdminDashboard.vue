<template lang="pug">
  .component.admin-dashboard
    h1.title Admin dashboard
    h2.form-title Add Review
    form(v-on:submit.prevent="addReview({title, type, reviewText})")
      label(for="title") Title
      input(type="text" id="title" name="title" v-model="title")
      fieldset
        label(for="movie") Movie
        input(type="radio" id="movie" value="movie" v-model="type")
        label(for="youtube") YouTube
        input(type="radio" id="youtube" value="youtube" v-model="type")
      label(for="new-review-text") Review
      textarea.new-review-text(v-model="reviewText")
      button(type="submit") submit
    h2.form-title Remove Review
    form(v-on:submit.prevent="removeReview(reviewId)")
      div(v-for="review in reviews" v-bind:key="review._id")
        label(:for="review._id") {{review.title}}
        input(type="radio" class="remove-radio" :id="review._id" name="review" :value="review._id" v-model="reviewId")
      button(type="submit") submit
</template>
<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'admin-dashboard',
  data () {
    return {
      title: '',
      reviewText: '',
      type: '',
      reviewId: []
    }
  },
  methods: {
    ...mapActions([
      'addReview',
      'removeReview'
    ])
  },
  computed: mapState([
    'reviews'
  ])
}
</script>

<style lang="stylus">
  label
    display: block
  fieldset
    border: none;
  .new-review-text
    width: 450px
    height: 600px
  #title
    height: 35px
    font-size: 1.5em
  button
    display: block
    margin: 0 auto
</style>


