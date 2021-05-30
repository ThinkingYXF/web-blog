import Vue from 'vue'
import App from './App.vue'
import router from "./router/index.js"
import store from "./store/index"
import vuetify from "@/plugins/vuetify"
import '@mdi/font/css/materialdesignicons.css'    //vuetify icon
import Message from "@/components/Message/index"
import "./assets/common.scss";
import apis from "./common/api";
import filter from "./common/filter"

Vue.prototype.apis = apis;
Vue.prototype.$message = Message
if (process.env.NODE_ENV == "development") {
  Vue.prototype.basePreImg = "http://127.0.0.1:8080"
} else if (process.env.NODE_ENV == "production") {
  Vue.prototype.basePreImg = "http://39.103.212.0:8080"
}

Object.keys(filter).forEach((key) => {
  Vue.filter(key, filter[key])
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')