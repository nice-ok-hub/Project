import axios from 'axios'
axios.defaults.baseURL = 'https://open.duyiedu.com'
axios.interceptors.request.use(function (config) {
  config.params = {
    ...config.params,
    appkey: 'MrZhang_1570943874445'
  }
  console.log(config.params)
  return config
}, function (error) {
  return Promise.reject(error)
})
export default axios
