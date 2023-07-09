import { createRouter, createWebHistory } from 'vue-router'

import DashboardLayout from "@/Layout/DashboardLayout.vue"
import Dashboard from "@/pages/DashbordComponent.vue"
import InitialQuestionnaire from "@/pages/questionnaireSection/InitialQuestionnaire"
import createQuestionnaire from "@/pages/questionnaireSection/createQuestionnaire.vue"
import login from "../pages/login.vue"
import showQuestionnair from '../pages/questionnaireSection/showOneQuestionnaire.vue'
import showMentalQuestionaire from '../pages/questionnaireSection/mentalQuestionnaire/showOneQuestionnaire.vue'

import InitialMentalQuestionnaire from '../pages/questionnaireSection/mentalQuestionnaire/InitialMentalQuestionnaire.vue'
import createMentalQuestionnaire from '../pages/questionnaireSection/mentalQuestionnaire/createMentalQuestionnaire.vue'

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
      let isAthenticated = localStorage.getItem('token');
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
      let isAthenticated = localStorage.getItem('token');
      if (isAthenticated) {
        next()

      } else {
        next("/")
      }
    }

  },
  {
    name: 'createQuestion',
    path: '/InitialQuestionnaire/createquestionnaire',
    component: createQuestionnaire,
    meta: {
      layout: DashboardLayout
    },
    beforeEnter: (to, from, next) => {
      let isAthenticated = localStorage.getItem('token');
      if (isAthenticated) {
        next()

      } else {
        next("/")
      }
    }
  },
  {
    name: 'showQuestionnair',
    path: '/InitialQuestionnaire/:id',
    component: showQuestionnair,
    props: true
  },
  ///////////////////////////////////////////////////////////////////////
  {
    name: 'InitialMentalQuestionnaire',
    path: "/InitialMentalQuestionnaire",
    component: InitialMentalQuestionnaire,
    meta: {
      layout: DashboardLayout
    },
    beforeEnter: (to, from, next) => {
      let isAthenticated = localStorage.getItem('token');
      if (isAthenticated) {
        next()

      } else {
        next("/")
      }
    }

  },
  {
    name: 'createMentalQuestionnaire',
    path: '/InitialMentalQuestionnaire/createMentalQuestionnaire',
    component: createMentalQuestionnaire,
    meta: {
      layout: DashboardLayout
    },
    beforeEnter: (to, from, next) => {
      let isAthenticated = localStorage.getItem('token');
      if (isAthenticated) {
        next()

      } else {
        next("/")
      }
    }
  },
  {
    name: 'showMentalQuestionaire',
    path: '/InitialMentalQuestionnaire/:id',
    component: showMentalQuestionaire,
    props: true
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

