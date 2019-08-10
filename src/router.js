import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/servivios',
      name: 'servicios',
      component: () => import(/* webpackChunkName: "servicios" */ './views/Servicios.vue')
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import(/* webpackChunkName: "Contacto" */ './views/Contacto.vue')
    },
    {
      path: '/deportista',
      name: 'deportista',
      component: () => import(/* webpackChunkName: "Deportista" */ './views/Deportista.vue')
    },
    {
      path: '/marcas',
      name: 'marcas',
      component: () => import(/* webpackChunkName: "Marcas" */ './views/Marcas.vue')
    },
    {
      path: '/ventas',
      name: 'ventas',
      component: () => import(/* webpackChunkName: "Ventas" */ './views/Ventas.vue')
    }


  ]
})
