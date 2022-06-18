import { createStore } from "vuex";

export default createStore({
  state: {
    sidebar: false,
  },
  mutations: {
    toggleSideBar(state) {
      state.sidebar = !state.sidebar;
    },
    closeSideBar(state) {
      state.sidebar = false;
    },
  },
});
