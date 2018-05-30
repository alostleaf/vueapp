export default {
  state: {
    isShow: true,
    msg: 'Hello,this is from msgModule'
  },
  mutations: {
    switch (state) {
      state.isShow = !state.isShow
    }
  },
}
