import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import vuetify from '../src/plugins/vuetify';

import MainBarComponent from './components/MainBarComponent'
import LoginFormComponent from './components/LoginFormComponent'
import ListSoftComponent from './components/home/ListSoftComponent'
import CreditosGupalesComponent from './components/credgrup/CreditosGrupalesComponent'
import InspeccionarComponent from './components/inspeccionar/InspeccionarComponent'
import ControlCambiosComponent from './components/cambios/ControlCambiosComponent'

import 'toastr/build/toastr.css'

const routes = [
     { path: '/', component: ListSoftComponent },
     { path: '/login', component: LoginFormComponent },
     { path: '/home', component: CreditosGupalesComponent },
     { path: '/creditos', component: CreditosGupalesComponent },
     { path: '/creditos/inspeccionar', component: InspeccionarComponent },
     { path: '/creditos/inspeccionar/cambios', component: ControlCambiosComponent },
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
          LoginFormComponent,
          ListSoftComponent,
          CreditosGupalesComponent,
          InspeccionarComponent,
          ControlCambiosComponent
     },

     data:()=>({
          items: [
               {
                    text: 'Home',
                    disabled: false,
                    href: 'home',
               }
          ],
     })



}).$mount('#app');
