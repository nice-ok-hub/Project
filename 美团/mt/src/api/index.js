import axios from '@/axios.js'
var api = {
  getSearchHotWord() {
    return axios.get('/api/meituan/header/searchHotWords.json')
  },
  searchWords() {
    return axios.get('/api/meituan/header/search.json')
  },
  getMenuList() {
    return axios.get('/api/meituan/index/nav.json')
  },
  getResultProducts() {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  getProductsList() {
    return axios.get('/api/meituan/list/goodsList.json')
  },
  getHotCity() {
    return axios.get('/api/meituan/city/hot.json')
  },
  getRecentCity() {
    return axios.get('/api/meituan/city/recents.json')
  },
  getProvinceList() {
    return axios.get('/api/meituan/city/province.json')
  },
  getCurPosition() {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  login(params) {
    console.log(params)
    return axios.get('/api/meituan/login', params)
  },
  register(params) {
    return axios.get('/api/meituan/register', params)
  }
}
export default api
