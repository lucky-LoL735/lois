import { createStore } from 'vuex'

const store = createStore({
  state: {
    username: '',
    roleType: 1,
    theme: '#1e80ff'
  },
  getters: {
  },
  mutations: {
    changeUserName (state, { username, roleType }) {
      state.username = username
      state.roleType = roleType
    },
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
  store.replaceState(JSON.parse(newState))
})

export default store
