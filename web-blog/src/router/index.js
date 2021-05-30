import Vue from "vue"
import VueRouter from "vue-router"
import store from "../store/index"

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const Login = resolve => require(["@/views/login.vue"], resolve)
const Home = resolve => require(["@/views/home.vue"], resolve)
const Upload = resolve => require(["@/views/upload.vue"], resolve)
const Resource = resolve => require(["@/views/resource.vue"], resolve)

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
    },
    {
      path: "/upload",
      name: "upload",
      meta: {
        auth: true
      },
      component: Upload
    },
    {
      path: "/resource",
      name: "resource",
      meta: {
        auth: true
      },
      component: Resource
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