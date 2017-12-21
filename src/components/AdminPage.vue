<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-padding">
    <admin-login />
    <change-password />
  </div>
</template>

<script>
import AdminLogin from './AdminLogin'
import ChangePassword from './ChangePassword'
export default {
  name: 'AdminPage',
  components: { AdminLogin, ChangePassword },
  data () {
    return {}
  }
}
</script>

<style lang="stylus">
</style>
