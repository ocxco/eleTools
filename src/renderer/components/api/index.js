import axios from 'axios'

class Api {
  user = {
    name: 'requestName',
    password: 'requestPwd'
  }

  constructor () {
    this.$http = axios.create({
      baseURL: 'http://ele.tools.cn'
    })
    this.$http.defaults.headers.post['Content-Type'] = 'application/json'
  }
  post (url, params, callback) {
    const data = {
      user: this.user,
      data: params
    }
    this.$http.post(url, data).then((res) => {
      if (callback) {
        callback(res)
      }
    }).then((err) => {
      console.log(err)
    })
  }
}

const api = new Api()
export default api

// module.exports = {
//   install: function (Vue) {
//     Vue.api = Vue.proptype.$api = Api
//   }
// }
