import Vue from 'vue'
import Router from 'vue-router'
import vHeader from '@/components/v-header/v-header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: vHeader
    }
  ]
})
