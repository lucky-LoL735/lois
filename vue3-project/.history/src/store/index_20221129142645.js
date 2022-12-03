import { createStore, storeKey } from 'vuex'

const store = createStore({
  state: {
    theme: '#1e80ff'
  },
  getters: {
  },
  mutations: {
    changeTheme (state, theme) {
      state.theme = theme
    }
  },
  actions: {
  },
  modules: {
  }
})
const newState = sessionStorage.getItem('vuex')
if (newState) {
  store.replaceState(JSON.parse(newState))
}
store.subscribe((mutation, state) => {
  sessionStorage.setItem('vuex', JSON.stringify(state))
  const newState = sessionStorage.getItem('vuex')
  storeKey.replaceState(JSON.parse(newState))
})

export default store
