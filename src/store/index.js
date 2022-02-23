import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
    SAVE_USERS(state, users){
      state.users = users;
    }
  },
  actions: {
    loadUsers({commit}){
      axios.get('https://jsonplaceholder.typicode.com/users').then(result =>{
        commit('SAVE_USERS', result.data)
      }).catch(error =>{
        throw new error('API ${error}')
      })
    }
  },
  modules: {
  }
})

