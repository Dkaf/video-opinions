<template>
  <!-- Configure "view" prop for QLayout -->
  <q-layout view="hHh lpr fff">
    <q-toolbar slot="header">

      <q-toolbar-title>
        Pats' Unsolicited Opinions
      </q-toolbar-title>
    </q-toolbar>

    <q-tabs slot="navigation" align="center">
      <q-route-tab slot="title" to="/" exact hide="icon" label="Home" />
      <q-route-tab slot="title" to="/movies" exact hide="icon" label="Movies" />
      <q-route-tab slot="title" to="/games" exact hide="icon" label="Games" />
      <q-route-tab slot="title" to="/youtube" exact label="YouTube" />
      <q-route-tab slot="title" to="/about" exact label="Me" />
    </q-tabs>

    <router-view class="layout-view" ></router-view>

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
