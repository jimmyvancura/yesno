import Vue from 'vue'
import Router from 'vue-router'
import VeeValidate from 'vee-validate';
import Home from '@/components/Home'

Vue.use(Router)
Vue.use(VeeValidate);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
