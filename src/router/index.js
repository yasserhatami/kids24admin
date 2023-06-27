import { createRouter, createWebHistory } from 'vue-router'

import DashboardLayout from "@/Layout/DashboardLayout.vue"
import Dashboard from "@/pages/DashbordComponent.vue"
import InitialQuestionnaire from "@/pages/questionnaireSection/InitialQuestionnaire"
import createQuestion from "@/pages/questionnaireSection/createQuestion.vue"
import login from "../pages/login.vue"
const routes = [
    {
        path: "/",
        component: login
    },
    {
        name: 'Dashboard',
        path: "/Dashboard",
        component: Dashboard,
        meta: {
            layout: DashboardLayout
        }
    },
    {
        name: 'InitialQuestionnaire',
        path: "/InitialQuestionnaire",
        component: InitialQuestionnaire,
        meta: {
            layout: DashboardLayout
        }
    },
    {
        name: 'createquestion',
        path: '/InitialQuestionnaire/createquestion',
        component: createQuestion,
        meta: {
            layout: DashboardLayout
        }
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

