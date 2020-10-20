import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    keyWrod: '',
    list: [],
    size: 5,
    nowPage: 1,
    totalPage: 1,
    count: 0,
    showModel: false,
    editStu: {}
  },
  mutations: {
    setList(state, list) {
      state.list = list;
    },
    setCount(state, count) {
      state.count = count;
      state.totalPage = Math.ceil(count / state.size)
    },
    setModal(state, bool) {
      state.showModel = bool;
    },
    setEditStu(state, stu) {
      state.editStu = stu;
    },
    setNowPage(state, n) {
      switch (n) {
        case -1:
          if (state.nowPage > 1) {
            state.nowPage--;
          }
          break;
        case 0:
          if (state.nowPage < state.totalPage) {
            state.nowPage++;
          }
          break;
        default:
          state.nowPage = n;
      }
    },
    setKeyWord(state, keyWord) {
      state.nowPage = 1;
      state.keyWrod = keyWord;
    }
  },
  actions: {
    getList(ctx) {
      api.findByPage(ctx.state.nowPage, ctx.state.size).then(data => {
        ctx.commit('setList', data.data.data.findByPage)
        ctx.commit('setCount', data.data.data.cont)
      })
    },
    updateStu({
      commit
    }, stu) {
      console.log(stu)
      return api.updateStu(stu)
        .then(res => {
          if (res.data.status == 'success') {
            commit('setModal', false)
            return {
              msg: res.data.msg,
              status: 'success'
            }
          } else {
            return {
              msg: res.data.msg,
              status: 'fail'
            }
          }
        })

    },
    turnPage({
      dispatch,
      commit,
      state
    }, n) {
      commit('setNowPage', n)
      dispatch('getList')
    },
    searchValue({
      dispatch,
      commit,
      state
    }, value) {
      commit("setKeyWord");
      if (state.keyWrod == '') {
        dispatch('getList');
      } else {
        dispatch('search', {
          page: state.nowPage,
          size: state.size,
          search: value
        })
      }
    },
    search({
      commit
    }, data) {
      api.searchStu(data).then(res=>{
        console.log(res)
      })
    }
  },
  modules: {}
})