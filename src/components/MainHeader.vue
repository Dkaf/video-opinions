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

    <q-tabs slot="navigation">
      <q-route-tab slot="title" to="/movies" replace hide="icon" label="Movies" />
      <q-route-tab slot="title" to="/games" replace hide="icon" label="Games" />
      <q-route-tab slot="title" to="/youtube" replace label="YouTube" />
      <q-route-tab slot="title" to="/about" replace label="Me" />
    </q-tabs>
   
    <router-view />

  </q-layout>
</template>

<script>
import { QLayout, QToolbar, QToolbarTitle, QTabs, QRouteTab } from 'quasar'
export default {
  name: 'MainHeader',
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QTabs,
    QRouteTab
  },
  data () {
    return {}
  }
}
</script>

<style lang="stylus">
</style>
