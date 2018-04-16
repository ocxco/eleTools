import Vue from 'vue'

const state = {
  currentLang: 'auto => auto',
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
    Vue.http.post('http://ele.tools.cn/translate', data).then(res => {
      console.log(res)
      commit('CHANGE_RES', data)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
