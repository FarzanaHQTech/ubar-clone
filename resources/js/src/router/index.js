import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import SignUp from '../pages/auth/SignUp.vue'
import LoginPage from '../pages/auth/LoginPage.vue'




const routes = [
  { path: '/login',
    name:'login',
    component:LoginPage

   },
  { path: '/singup',
    name:'singup',
    component:SignUp
  },
]

export const router = createRouter({
  history: createWebHistory('/app'),
  routes,
})