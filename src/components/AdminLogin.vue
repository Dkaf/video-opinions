<template>
  <div>
    <q-input v-model="password" type="password" float-label="Password"/>
    <q-btn v-model="submit" loader @click="submitPass()">Submit</q-btn>
  </div>
</template>

<script>
import { QInput, QBtn } from 'quasar'
export default {
  name: 'AdminLogin',
  components: { QInput, QBtn },
  data () {
    return {
      password: '',
      submit: false
    }
  },
  methods: {
    submitPass () {
      this.submit = true
      console.log('password submitted')
      setTimeout(() => {
        this.submit = false
      }, 3000)
    }
  }
}
</script>

<style lang="stylus">
</style>
