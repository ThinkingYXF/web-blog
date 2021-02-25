import Vue from "vue"
import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css"

Vue.use(Vuetify)

import zhHans from "vuetify/es5/locale/zh-Hans"
import ko from "vuetify/es5/locale/ko"
import en from "vuetify/es5/locale/en"
const opts = {
  lang: {
    locales: { zhHans, ko, en },
    current: "en"
  }
}

export default new Vuetify(opts)