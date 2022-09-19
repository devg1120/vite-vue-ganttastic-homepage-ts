//import Vue from 'vue'
import { createApp } from 'vue'

//import VueRouter from 'vue-router'
import { createRouter , createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

//Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/example',
    name: 'Example',
    component: () => import(/* webpackChunkName: "about" */ '../views/Example.vue')
  },
  {
    path: '/docs',
    name: 'Docs',
    component: () => import(/* webpackChunkName: "about" */ '../views/Docs.vue')
  }
]
/*
const router = new VueRouter({
  routes
})
const app = createApp(App)
app.use(router)
*/

const router = createRouter({
    history: createWebHistory(), // HTML5 History モード
    routes
})
 
export default router;


