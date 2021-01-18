import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    show: false,
    onScroll: true,
    lastScrollPosition: 0
  },
  mutations: {
    TOGGLE_MENU_BAR(state) {
      state.show = !state.show
    },
    TOGGLE_NAVBAR(state) {
      state.onScroll = !state.onScroll
    },
    HANDLE_SCROLL(state) {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      if (Math.abs(currentScrollPosition - state.lastScrollPosition) < 60) {
        return
      }
      state.onScroll = currentScrollPosition < state.lastScrollPosition
      state.lastScrollPosition = currentScrollPosition
    }
  },
  actions: {
    toggleMenuBar({
      commit
    }) {
      commit('TOGGLE_MENU_BAR')
    },
    toggleNavScroll({
      commit
    }) {
      if (window.scrollY > 100) {
        commit('TOGGLE_NAVBAR')

      } else if (window.scrollY < 100) {
        commit('TOGGLE_NAVBAR')

      }
    },
    handleScroll({
      commit
    }) {
      commit('HANDLE_SCROLL')
    }
  },
  modules: {}
})