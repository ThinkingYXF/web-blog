import Vue from "vue"
import VueRouter from "vue-router"
import store from "../store/index"

Vue.use(VueRouter)

const Login = resolve => require(["@/views/login.vue"], resolve)
const Home = resolve => require(["@/views/home.vue"], resolve)

const router = new VueRouter({
  routes: [
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
      meta: {
        auth: true
      },
      component: Home
    }
  ]
})

//路由校验
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (store.state.loginToken) {
      next()
    } else {
      next({ path: "/" })
    }
  } else {
    next()
  }
})

export default router