<template lang="pug">
  .component.admin
    form.loginForm(v-on:submit.prevent="login()")
      fieldset
        label.formLabel(for='adminPass') Password
        input.loginInput.pass(type='password' v-model="password")
        button.formButton(type='submit') Enter
    h2 Change Password
    form.passChange(v-on:submit.prevent="")
      label.formLabel(for='oldPass') Old Password
      input.passChangeInput.oldPass(type='password' v-model="oldPass")
      label.formLabel(for='newPass') New Password
      input.passChangeInput.newPass(type='password' v-model="newPass")
      label.formLabel(for='confirmPass') Confirm Password
      input.passChangeInput.confirmPass(type='password' v-model="confirmPass")
      input(type='submit')
</template>

<script>
import {mapActions} from 'vuex'
import axios from 'axios'

export default {
  name: 'admin-page',
  data () {
    return {
      password: '',
      oldPass: '',
      newPass: '',
      confirmPass: ''
    }
  },
  methods: {
    login() {
        this.$store.dispatch('login', this.password)
        .then( () => {
          (this.$store.state.loggedIn) ? this.$router.push({name: 'AdminDashboard'}) : console.log('login error')
        })
    },
    changePassword() {
      (this.newPass === this.confirmPass) ?
        this.$store.dispatch('changePass', {newPass: this.newPass, oldPass: this.oldPass })
        : console.log('passwords do not match')
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
    border: none
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



