import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Vitae from './views/Vitae.vue'
import Blog from './views/Blog.vue'
import SampleReels from './views/SampleReels.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/vitae',
      name: 'vitae',
      component: Vitae
      //component: () => import(/* webpackChunkName: "about" */ './views/Vitae.vue')
    },
      {
          path: '/blog',
          name: 'blog',
          component: Blog
      },
      {
          path: '/samplereels',
          name: 'samplereels',
          component: SampleReels
      }
  ]
})
