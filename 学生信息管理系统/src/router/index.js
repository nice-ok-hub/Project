import Vue from 'vue'
import VueRouter from 'vue-router'
import studentAdd from '../views/studentAdd.vue'
import studentList from '../views/studentList.vue'
Vue.use(VueRouter)
const routes = []
const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/studentAdd',
      name: 'studentAdd',
      component: studentAdd
    },
    {
      path: '/studentList',
      name: "studentList",
      component: studentList
    },
    {
      path: '*',
      redirect: '/studentList'
    }
  ],
  linkExactActiveClass:'active'
})
export default router