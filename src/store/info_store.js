export default {
  state: {
    msg: 'hello,World'
  },
  mutations: {
    chgMsg(state, msg) {
      state.msg = msg
    }
  },
  actions: {
    chgMsg(ctx) {
      ctx.commit('chgMsg', 'I`m changed!')
    },
  },
  getters: {
    hasMsg(state) {
      return state.msg.length != 0
    },
  },
}
