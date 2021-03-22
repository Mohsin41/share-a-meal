import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

const mutations = {
  SET_USER: 'set user'
}

const store = new Vuex.Store({
  state: {user: null},
  mutations: {
    [mutations.SET_USER](state, user)
  {
      state.user = user
    }
    },
  actions: {async fetchUser(store, id) {
      const userRequest = await axios.get(`/api/users/${id}`)
      return userRequest.data
    },
    async fetchUsers() {
      const usersRequest = await axios.get('/api/users')
      return usersRequest.data
    },
     async fetchSession({ commit }) {
      const user = await axios.get('/api/account/session')
      commit(mutations.SET_USER, user.data || null)
    },
    async login({ commit }, credentials) {
      try {
        const user = await axios.post('/api/account/session', credentials)
        commit(mutations.SET_USER, user.data)
      } catch (e) {
        throw e
      }
    },
    async register(store, user) {
      return axios.post('/api/account', user)
    },
    async logout({ commit }) {
      await axios.delete('/api/account/session')
      commit(mutations.SET_USER, null)
    }

},
  modules: {}
});
export default async function init() {
  await store.dispatch('fetchSession')
  return store
}
