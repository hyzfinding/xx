import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/pages/index'
import aboutUs from '@/components/pages/aboutUs'
import joinUs from '@/components/pages/joinUs'
import downLoad from '@/components/pages/downLoad'
import xiaoyou from '@/components/pages/xiaoyou'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
    	path:'/aboutUs',
    	name: 'aboutUs',
    	component: aboutUs
    },
    {
      path:'/joinUs',
      name: 'joinUs',
      component: joinUs
    },
    {
      path:'/downLoad',
      name: 'downLoad',
      component: downLoad
    },
    {
      path:'/xiaoyou',
      name: 'xiaoyou',
      component: xiaoyou
    }
  ]
})
