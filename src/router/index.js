import Vue from 'vue'
import VueRouter from 'vue-router'
import AppInicio from '../views/AppInicio.vue'
import ClassificacaoClubes from '../views/ClassificacaoClubes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AppInicio',
    component: AppInicio
  },
  {
    path: '/classificacao',
    name: 'Classificação',
    component: ClassificacaoClubes
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
