import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }, 

    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    }, 

    {
      path: '/Portfolio',
      name: 'Portfolio',
      component: () => import('../views/PortfolioView.vue')
    }, 
        

    // DOWN FROM HERE - ONLY PATHS TO PORTFOLIO PROJECTS <33

    {
      path: '/PiDay',
      name: 'PiDay',
      component: () => import('../views/PiDayView.vue')
    }, 

    {
      path: '/NativeAmericans',
      name: 'NativeAmericans',
      component: () => import('../views/NativeAmericansView.vue')
    }, 

    {
      path: '/ExamProject01',
      name: 'ExamProject01',
      component: () => import('../views/ExamProject01View.vue')
    }, 

    {
      path: '/LittleRobert',
      name: 'LittleRobert',
      component: () => import('../views/LittleRobertView.vue')
    }, 

    {
      path: '/CodedPostcard',
      name: 'CodedPostcard',
      component: () => import('../views/CodedPostcardView.vue')
    },
    
  ]
})

export default router
