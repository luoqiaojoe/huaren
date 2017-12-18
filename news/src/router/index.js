import Vue from 'vue'
import Router from 'vue-router'
import pages from '../views/pages'
import detail from '../views/Detail.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect:'/pages/war'
    },
    {
      path: '/pages',
      redirect:'/pages/war'
    },

    {
        path:'/pages/:type',
        name:'pages',
        component:pages,
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: detail
    },
  ],
  // scrollBehavior (to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return { x: 0, y: 0 }
  //   }
  // }
})
