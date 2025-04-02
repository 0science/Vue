import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/HomePage.vue'
import About from './views/AboutPage.vue'
import Contact from './views/ContactPage.vue'
import Hello from './views/HelloWorld.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    }
  ]
})