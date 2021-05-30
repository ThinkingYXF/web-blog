import Vue from "vue"
import Vuex from "vuex"
import persistedState from "vuex-persistedstate"    //vuex持久化
Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [
    persistedState({
      storage: window.localStorage
    })
  ],
  state: {
    loginToken: ""
  },
  getters: {
    bearer(state) {
      return "Bearer " + state.loginToken
    }
  },
  mutations: {
    setToken(state, token) {
      state.loginToken = token
    }
  }
})

export default store