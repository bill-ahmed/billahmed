import Vue from 'vue'
import App from './App.vue'
import IconButton from './components/shared/IconButton.vue'

//@ts-ignore
import { Button, Steps, Tag, TagList } from 'buefy'

import 'buefy/dist/buefy.css'
import './main.css'

Vue.use(Button)
Vue.use(Steps)

Vue.use(Tag)

Vue.component('IconButton', IconButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
