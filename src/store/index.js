import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)// Install Vuex State Management

const state = {
  selectedVideo: {},
  reviews: [],
  loading: false,
  password: ''
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
