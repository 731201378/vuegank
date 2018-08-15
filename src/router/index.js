import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Day from '@/pages/Day'
import Page from '@/pages/Page'
import Girl from '@/pages/Girl'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    /* {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, */
    {
      path: '/',
      name: 'Day',
      component: Day
    },
    {
      path: '/page/:category',
      name: 'Page',
      component: Page,
      props: true
    },
    {
      path: '/girl',
      name: 'Girl',
      component: Girl
    }
  ]
})
