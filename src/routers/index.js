import Vue from 'vue'
import Router from 'vue-router'
import MovieRouter from './movie'
import CinemaRouter from './cinema'
import MineRouter from './mine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    MovieRouter,
    CinemaRouter,
    MineRouter,
    //重定向
    {
      path: '/*',
      redirect: '/movie'
    }



    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].JS) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
