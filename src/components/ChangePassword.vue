<template>
  <div>
    <q-input type="password" float-label="Old Password" v-model="oldPass" />
    <q-input type="password" float-label="New Password" v-model="newPass" />
    <q-input type="password" float-label="Confirm Password" v-model="confirmPass" />
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
      submit: false
    }
  },
  methods: {
    changePass () {
      this.submit = true
      setTimeout(() => {
        this.submit = false
        console.log('Password changed')
      }, 3000)
    }
  }
}
</script>

<style lang="stylus">
</style>
