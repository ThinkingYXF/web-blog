import Vue from 'vue'
import App from './App.vue'
import router from "./router/index.js"
import vuetify from "@/plugins/vuetify"
import '@mdi/font/css/materialdesignicons.css'    //vuetify icon
import Message from "@/components/Message/index"

import "./assets/common.scss";

import apis from "./common/api";
Vue.prototype.apis = apis;

Vue.prototype.$message = Message

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')