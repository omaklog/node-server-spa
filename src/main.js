import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import vuetify from '../src/plugins/vuetify';

import MainBarComponent from './components/MainBarComponent'
import LoginFormComponent from './components/LoginFormComponent'
import ListSoftComponent from './components/home/ListSoftComponent'

import 'toastr/build/toastr.css'

const routes = [
     { path: '/login', component: LoginFormComponent },
     { path: '/', component: ListSoftComponent }
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
          ListSoftComponent
     },

     data:()=>({
          items: [
               {
                    text: 'Dashboard',
                    disabled: false,
                    href: 'breadcrumbs_dashboard',
               },
               {
                    text: 'Link 1',
                    disabled: false,
                    href: 'breadcrumbs_link_1',
               },
               {
                    text: 'Link 2',
                    disabled: true,
                    href: 'breadcrumbs_link_2',
               },
          ],
     })



}).$mount('#app');
