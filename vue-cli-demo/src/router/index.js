import Vue from 'vue'
import Router from 'vue-router'
//导入路由跳转的模块
import HelloWorld from '@/components/HelloWorld'
import User from '@/components/user/User'
import Order from '@/components/order/Order'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    }
  ]
})
