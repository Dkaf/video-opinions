<template>
  <div>
    <q-input v-model="password" type="password" float-label="Password" @keyup.enter="login()"/>
    <q-btn v-model="load" loader @click="login()">Submit</q-btn>
  </div>
</template>

<script>
import { QInput, QBtn } from 'quasar'
export default {
  name: 'AdminLogin',
  components: { QInput, QBtn },
  data () {
    return {
      load: false,
      password: ''
    }
  },
  methods: {
    login () {
      this.load = true
      this.$store.dispatch('login', this.password).then(() => {
        this.load = false
        this.password = ''
        this.$router.push({name: 'AdminDashboard'})
      }).catch((err) => {
        this.load = false
        this.password = ''
        alert(err)
      })
    }
  }
}
</script>

<style lang="stylus">
</style>
