import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import vuetify from '../src/plugins/vuetify';

import MainBarComponent from './components/MainBarComponent'
import LoginFormComponent from './components/LoginFormComponent'

import 'toastr/build/toastr.css'

const routes = [
     { path: '/login', component: LoginFormComponent }
]

const router = new VueRouter({
     mode: 'history',
     routes // short for `routes: routes`
})

new Vue({
     el: '#app',

     vuetify,

     router,

     components:{
          MainBarComponent,
          LoginFormComponent
     }

}).$mount('#app');
