import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import store from '../store'
import Home from '../view/Home.vue'
import TopChart from '../view/TopChart.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/topchart',
        name: 'TopChart',
        component: TopChart
    }
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
export default router