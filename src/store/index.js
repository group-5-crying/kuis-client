import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    users: []
  },
  mutations: {
    SOCKET_userlogin (state, data) {
      state.user = localStorage.getItem('user')
      state.users = data
    }
  },
  actions: {
  },
  modules: {
  }
})
