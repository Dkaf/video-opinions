import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  selectedVideo: {},
  reviews: []
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})