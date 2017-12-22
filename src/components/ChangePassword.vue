<template>
  <div>
    <q-input type="password" float-label="Current Password" v-model="oldPass" @keyup.enter="$refs.newPass.focus()"/>
    <q-input type="password" float-label="New Password" ref="newPass" v-model="newPass" @keyup.enter="$refs.confirmPass.focus()"/>
    <q-input type="password" float-label="Confirm Password" ref="confirmPass" v-model="confirmPass" @keyup.enter="changePass()"/>
    <q-btn v-model="submit" loader @click="changePass()">Submit</q-btn>
  </div>
</template>

<script>
import { QInput, QBtn } from 'quasar'
export default {
  name: 'ChangePassword',
  components: { QInput, QBtn },
  data () {
    return {
      oldPass: '',
      newPass: '',
      confirmPass: '',
      loading: false,
      error: false
    }
  },
  methods: {
    changePass: function () {
      this.loading = true
      if (this.newPass !== this.confirmPass) {
        this.loading = false
        alert('Passwords do not match')
      }
      else if (this.oldPass !== this.$store.state.password) {
        this.loading = false
        alert('Current password is incorrect')
      }
      else {
        this.loading = false
        this.oldPass = ''
        this.newPass = ''
        this.confirmPass = ''
        this.$store.dispatch('changePass', {newPass: this.newPass, oldPass: this.oldPass})
      }
    },
    changeFocus (next) {
      this.$refs[next].focus()
    }
  }
}
</script>

<style lang="stylus">
</style>
