import { createStore } from "vuex";

export default createStore({
  state: {
    count: 101,
    posts: [],
    currPage: 0,
    pageSize: 10,
    visible: [],
  },
  getters: {},
  mutations: {
    addPost(state, payload) {
      state.count++;
      state.posts.push(payload);
    },
    updatePage(state, payload) {
      state.currPage = payload;
    },
    updateVis(state, payload) {
      state.visible = payload;
    },
    addVis(state, payload) {
      state.visible.push(payload);
    },
  },
  actions: {},
  modules: {},
});
