import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BalieView from '../views/BalieView.vue'
import ChartsView from '../views/ChartsView.vue'
import DevView from '../views/DevView.vue'
import ForumView from '../views/ForumView.vue'
import FunctiesView from '../views/FunctiesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/balie',
      name: 'balie',
      component: BalieView
    },
    {
      path: '/charts',
      name: 'charts',
      component: ChartsView
    },
    {
      path: '/dev',
      name: 'dev',
      component: DevView
    },
    {
      path: '/forum',
      name: 'forum',
      component: ForumView
    },
    {
      path: '/functies',
      name: 'functies',
      component: FunctiesView
    },
  ]
})

export default router
