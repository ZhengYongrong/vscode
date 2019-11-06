// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Antd from 'ant-design-vue'

import App from './App'
import router from './router'
import 'ant-design-vue/dist/antd.css'
//1.import组件 import App from './App'
//2.注册组件    components: { App },
//3.使用组件     template: '<App/>'  == App.vue 所声明的export default {name: 'App'}
Vue.config.productionTip = false
Vue.use(Antd)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
