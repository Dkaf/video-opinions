<template lang="pug">
  .component.admin
    form.loginForm(v-on:submit.prevent="login()")
      fieldset
        label.formLabel(for='adminPass') Password
        input.loginInput.pass(type='password' v-model="password")
        button.formButton(type='submit') Enter
</template>

<script>
import {mapActions} from 'vuex'
import axios from 'axios'

export default {
  name: 'admin-page',
  data () {
    return {
      password: ''
    }
  },
  methods: {
    login() {
        this.$store.dispatch('login', this.password)
        .then(this.$router.push({name: 'AdminDashboard'}))
    }
  }
}
</script>

<style lang="stylus">

  margin = 0 auto
  font-size = 1.2em

  .loginForm
    width: 300px
    height: 500px
    margin: margin
    fieldset
      margin: margin
    .formLabel
      display: block
      font-size: font-size
    .loginInput
      height: 25px
      margin: 10px
    .formButton
      display: block
      height: 35px
      width: 90px
      margin: margin
      font-size: font-size

</style>



