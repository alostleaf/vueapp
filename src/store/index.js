import Vue from 'vue'
import Vuex from 'vuex'


import infoStore from './info_store.js'
import msgStore from './msg_store.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    info: infoStore,
    msg: msgStore,
  },
})

export default store
