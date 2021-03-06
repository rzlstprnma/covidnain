import Vue from 'vue'
import VueRouter from 'vue-router'
import Detail from "@/components/Detail.vue"
import Home from "@/components/Home.vue";
import About from "@/components/About.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/detail/:country/:id",
    name: "Detail",
    component: Detail
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
];

const router = new VueRouter({
    routes
});

export default router

