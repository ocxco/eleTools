const state = {
  currentLang: 'en => zh'
}

const mutations = {
  CHANGE_CURRENT_LANG (state, lang) {
    state.currentLang = lang
  },
  INCREMENT_MAIN_COUNTER (state) {
    state.main++
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  }
}

export default {
  state,
  mutations,
  actions
}
