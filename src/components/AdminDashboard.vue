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
      label(for="new-review-text" name="Text")
      textarea.new-review-text(v-model="reviewText")
      button(type="submit") submit
    h2.form-title Remove Review
    form
      fieldset
        label(for="review-1") Review 1
        input(type="checkbox" id="review-1" name="review" value="review 1")
        label(for="review-2") Review 2
        input(type="checkbox" id="review-2" name="review" value="review 2")
        label(for="review-3") Review 3
        input(type="checkbox" id="review-3" name="review" value="review 3")
    button(type="submit") submit
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'admin-dashboard',
  data () {
    return {
      title: '',
      reviewText: '',
      type: ''
    }
  },
  methods: {
    ...mapActions([
      'addReview'
    ]),
  }
}
</script>

