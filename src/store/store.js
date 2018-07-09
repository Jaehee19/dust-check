import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

const state = {
  isLoggedIn: false,
  pending: false
}

const mutations = {
  [types.LOGIN]: state => {
    state.isLoggedIn = true
  },
  [types.LOGOUT]: state => {
    state.isLoggedIn = false
  },
  [types.START_PENDING]: state => {
    state.pending = true
  },
  [types.END_PENDING]: state => {
    state.pending = false
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
  isLoggedIn: state => state.isLoggedIn,
  pending: state => state.pending
}

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  actions,
  getters
})
