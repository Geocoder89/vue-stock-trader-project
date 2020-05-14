import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue,IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { routes} from './routes'
import store from './store/store'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vue-stock-trader-4590c.firebaseio.com/'
Vue.use(BootstrapVue);
Vue.use(IconsPlugin)

Vue.filter('currency',(value) => {
    return ' ₦' + value.toLocaleString()
})

const router = new VueRouter({
  mode: 'history',
  routes
})
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
