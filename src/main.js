//import Vue from 'vue'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import dayjs from "dayjs"
import isSameOrBefore from "dayjs/plugin/isSameOrBefore"
import isSameOrAfter from "dayjs/plugin/isSameOrAfter"
import isBetween from "dayjs/plugin/isBetween"
import customParseFormat from "dayjs/plugin/customParseFormat"

dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)
dayjs.extend(isBetween)
dayjs.extend(customParseFormat)


import App from './App.vue'
import router from './router'
//import vuetify from './plugins/vuetify'

//Vue.config.productionTip = false

/*
new Vue({
  router,
  //vuetify,
  render: h => h(App)
}).$mount('#app')
*/

const app = createApp(App)
const vuetify = createVuetify({
 components,
 directives,

}) // Replaces new Vuetify()
app.use(vuetify)

app.use(router)
app.mount('#app')

