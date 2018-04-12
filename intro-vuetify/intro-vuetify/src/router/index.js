import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Products from '@/components/Products'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    }
  ]
})
