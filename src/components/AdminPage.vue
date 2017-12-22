<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-padding">
    <admin-login />
  </div>
</template>

<script>
import AdminLogin from './AdminLogin'
export default {
  name: 'AdminPage',
  components: { AdminLogin },
  data () {
    return {}
  }
}
</script>

<style lang="stylus">
</style>
