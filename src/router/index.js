import { createRouter, createWebHistory } from 'vue-router'

import DashboardLayout from "@/Layout/DashboardLayout.vue"
import Dashboard from "@/pages/DashbordComponent.vue"
import InitialQuestionnaire from "@/pages/questionnaireSection/InitialQuestionnaire"
import createQuestionnaire from "@/pages/questionnaireSection/createQuestionnaire.vue"
import login from "../pages/login.vue"

const routes = [
    {
        path: "/",
        component: login,
        
    },
    {
        name: 'Dashboard',
        path: "/Dashboard",
        component: Dashboard,
        
        meta: {
            layout: DashboardLayout
        },
        beforeEnter: (to, from, next) => {
            let  isAthenticated = localStorage.getItem('token');
            if (isAthenticated) {
              next()
  
            } else {
              next("/")
            }
          }
        
        
        
    },
    {
        name: 'InitialQuestionnaire',
        path: "/InitialQuestionnaire",
        component: InitialQuestionnaire,
        meta: {
            layout: DashboardLayout
        },
        beforeEnter: (to, from, next) => {
            let  isAthenticated = localStorage.getItem('token');
            if (isAthenticated) {
              next()
  
            } else {
              next("/")
            }
          }
        
    },
    {
        name: 'createquestion',
        path: '/InitialQuestionnaire/createquestionnaire',
        component: createQuestionnaire,
        meta: {
            layout: DashboardLayout
        },
        beforeEnter: (to, from, next) => {
            let  isAthenticated = localStorage.getItem('token');
            if (isAthenticated) {
              next()
  
            } else {
              next("/")
            }
          }
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

