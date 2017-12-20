<template>
  <!-- Configure "view" prop for QLayout -->
  <q-layout>
    <q-toolbar slot="header">
      <!-- opens drawer below
      <button class="hide-on-drawer-visible" @click="$refs.drawer.open()">
        <i>menu</i>
      </button>
      -->
      <q-toolbar-title>
        Title
      </q-toolbar-title>
    </q-toolbar>

    <!-- Navigation Tabs
    <q-tabs slot="navigation">
      <q-route-tab slot="title" icon="view_quilt" to="/layout/about" replace hide="icon" label="About" />
      <q-route-tab slot="title" icon="view_day" to="/layout/toolbar" replace hide="icon" label="Toolbar" />
      <q-route-tab slot="title" icon="view_day" to="/layout/tabs" replace label="Tabs" />
      <q-route-tab slot="title" icon="input" to="/layout/drawer" replace label="Drawer" />
    </q-tabs>
    -->
    <router-view />

  </q-layout>
</template>

<script>
export default {
  name: 'MainHeader',
  data () {
    return {}
  }
}
</script>

<style lang="stylus">
</style>
