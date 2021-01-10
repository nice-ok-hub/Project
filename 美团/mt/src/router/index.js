import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default'
import blank from '@/layout/blank'
import Index from '@/page/index'
import changeCity from '@/page/changeCity'
import goodsCity from '@/page/goodsCity'
import Login from '@/page/login.vue'
import Register from '@/page/register.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'defaultPage',
    component: defaultPage,
    redirect: '/index',
    children: [{
      path: '/index',
      name: 'index',
      component: Index
    }, {
      path: '/changeCity',
      name: 'changeCity',
      component: changeCity
    }, {
      path: 's/:name',
      name: 'goods',
      component: goodsCity
    }]
  }, {
    path: '/blank',
    name: 'blank',
    component: blank,
    children: [{
      path: 'login',
      name: 'login',
      component: Login
    }, {
      path: 'register',
      name: 'register',
      component: Register
    }]
  }, ],
  mode: 'history'
})
