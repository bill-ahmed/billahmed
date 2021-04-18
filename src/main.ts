import Vue from 'vue'
import App from './App.vue'

//@ts-ignore
import { Button, Steps } from 'buefy'

import 'buefy/dist/buefy.css'
import './main.css'

Vue.use(Button)
Vue.use(Steps)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
