import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/HomePage.vue'
import TestPage1 from './views/TestPage1.vue'
import TestPage2 from './views/TestPage2.vue'
import TestPage3 from './views/TestPage3.vue'
import TestPage4 from './views/TestPage4.vue'
import TestPage5 from './views/TestPage5.vue'

import CasePage1 from './views/CasePage1.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
      redirect: '/home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/page1',
      name: 'page1',
      component: TestPage1
    },
    {
      path: '/page2',
      name: 'page2',
      component: TestPage2
    },
    {
      path: '/page3',
      name: 'page3',
      component: TestPage3
    },
    {
      path: '/page4',
      name: 'page4',
      component: TestPage4
    },
    {
      path: '/page5',
      name: 'page5',
      component: TestPage5
    },
    {
      path: '/case1',
      name: 'case1',
      component: CasePage1
    }
  ]
})