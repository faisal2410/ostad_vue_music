import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/HomeView.vue";
import About from "../views/AboutView.vue";
import Manage from "../views/ManageView.vue";
import NotFound from "../components/NotFound.vue";


const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "about",
    path: "/about",
    component: About,
  },
  {
    name: "manage",    
    path:"/manage",
    component: Manage,   
  }, 

  { path: '/:pathMatch(.*)*',
   name: 'NotFound',
   component: NotFound 
  },


];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-yellow-500",
  
})



export default router
