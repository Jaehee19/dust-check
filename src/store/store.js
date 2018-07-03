import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

const state = {
  isLoggedIn: false
}

const mutations = {
  [types.LOGIN]: state => {
    state.isLoggedIn = true
  },
  [types.LOGOUT]: state => {
    state.isLoggedIn = false
  }
}

const actions = {
  login ({commit}) {
    commit(types.LOGIN)
  },
  logout ({commit}) {
    commit(types.LOGOUT)
  }
}

const getters = {
  isLoggedIn: state => state.isLoggedIn
}

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  actions,
  getters
})
