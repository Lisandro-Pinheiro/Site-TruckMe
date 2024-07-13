import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import BannerComponent from './components/BannerComponent.vue'
import AboutComponent from './components/AboutComponent.vue'
import ServicesTableComponent from './components/ServicesTableComponent.vue'
import ContactFormComponent from './components/ContactFormComponent.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: BannerComponent },
  { path: '/about', component: AboutComponent },
  { path: '/services', component: ServicesTableComponent },
  { path: '/contact', component: ContactFormComponent }
]

const router = new VueRouter({
  routes
})

Vue.component('header-component', HeaderComponent)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
