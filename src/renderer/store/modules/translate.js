import Vue from 'vue'

const state = {
  currentLang: 'zh => en',
  res: ''
}

const mutations = {
  CHANGE_CURRENT_LANG (state, lang) {
    console.log(lang)
    state.currentLang = lang
  },
  CHANGE_RES (state, res) {
    state.res = res
  }
}

const actions = {
  doTranslate ({ commit }, data) {
    // do something async
    Vue.api.post('/translate', data, (res) => {
      console.log(res)
      commit('CHANGE_RES', res.data.data.data.trans_result[0].dst)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
