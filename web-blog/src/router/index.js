import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const Login = resolve => require(["@/views/login.vue"], resolve)
const Home = resolve => require(["@/views/home.vue"], resolve)

const routes = [
  {
    path: "/",
    name: "index",
    component: Login,
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/home",
    name: "home",
    component: Home
  }
]

export default new VueRouter({
  routes
})