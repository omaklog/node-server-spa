<template>
    <v-app-bar app class="back-dark" dark>
        <v-container>
            <v-row>
                <strong class="main-bar__title" >Integra</strong>
                <strong class="main-bar__subtitle">Software</strong>
                <v-spacer></v-spacer>
                <strong class="text--success mt-3 mr-1">{{user != 'login' ? user : ''}}</strong>
                 <div  v-if="user != 'login'">
                      <v-avatar size="36px">

                           <img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460">
                      </v-avatar>
                      <v-menu bottom left>
                           <template v-slot:activator="{ on, attrs }">
                                <v-btn dark icon v-bind="attrs" v-on="on">
                                     <v-icon>mdi-chevron-down</v-icon>
                                </v-btn>
                           </template>

                           <v-list>
                                <v-list-item>
                                     <v-list-item-title>Profile</v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                     <v-list-item-title @click="logoutSession">Logout</v-list-item-title>
                                </v-list-item>
                           </v-list>
                      </v-menu>
                 </div>


            </v-row>
        </v-container>

        <v-spacer/>


    </v-app-bar>
</template>

<script>
    export default {
        name: "MainBarComponent",

        props:{
             user :{
                  default:null
             }
        },
         methods:{
              logoutSession(){
                   window.location.pathname = '/logout'
              }
         }
    }
</script>

<style lang="scss">

     @import './src/assets/css/_variables.scss';

     .main-bar {

        &__title {
             color:$white-text;
        }

        &__subtitle {
             color: $green-title;
        }

    }

</style>
