// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/main.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
Vue.directive('document-click', {
  bind(el, binding, vnode) {
    document.addEventListener('click', binding.value, false)
  },
  inserted() {
    console.log("inserted")
  },
  undate() {
    console.log("undate")
  }
})
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  store,
  template: '<App/>'
})
