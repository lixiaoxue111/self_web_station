import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Vitae from './views/Vitae.vue'
import Blog from './views/Blog.vue'
import SampleReels from './views/SampleReels.vue'
import LSkill from './views/LSkill.vue'
import About from './views/About.vue'
import ZSkill from './views/ZSkill.vue'
import ZSampleReels from './views/ZSampleReels.vue'
import ZAbout from './views/ZAbout.vue'
Vue.use(Router);

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
      },
      {
          path: '/lskill',
          name: 'lskill',
          component: LSkill
      },
      {
          path:'/about',
          name:'about',
          component:About
      },
      {
          path:'/zskill',
          name:'zskill',
          component:ZSkill
      },
      {
          path:'/zsamplereels',
          name:'zsamplereels',
          component:ZSampleReels
      },
      {
          path:'/zabout',
          name:'zabout',
          component:ZAbout
      }
  ]
})
