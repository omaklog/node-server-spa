<template>
     <v-container fluid class="login-form">
          <v-row>
               <v-col lg="3" md="2" sm="1" class="hidden-sm-and-down"></v-col>
               <v-col lg="6" md="8" sm="10" xs="12" class="mx-auto">
                    <div class="login-form__container  mt-20">


                    <h2 class="text-center">Integra Software Bienvenido</h2>
                    <hr class="hr-light">
                    <v-form  method="POST" dark class="login-form__inputs" autocomplete="off">

                         <v-text-field v-model="email"
                                       id="email"
                                       label="Correo electrónico:"
                                       label-for="email"
                                       prepend-icon="mdi-account"
                                       placeholder="Correo electrónico"
                                       name="email"

                                       type="email"></v-text-field>
                         <v-text-field v-model="password"
                                       id="password"
                                       prepend-icon="mdi-account-key"
                                       name="password"
                                       placeholder="Contraseña"
                                       label="Contraseña"
                                       type="password"></v-text-field>
                         <br>
                         <div class="mb-16">
                              <v-switch class="mx-auto w-25"
                                        label="Recordarme"
                                        color="info"
                                        value="remember" hide-details
                              ></v-switch>
                         </div>

                         <v-card-actions dark>
                              <v-btn type="button" class="secondary mx-auto " dark @click="login">Ingresar</v-btn>
                         </v-card-actions>
                         <v-spacer></v-spacer>
                         <v-content class="text-xs-center" dark>
                              <a  href=""><small>¿Olvidaste tu contraseña?</small></a>
                         </v-content>

                    </v-form>
                    </div>
               </v-col>
               <v-col lg="3" md="2" sm="1"  class="hidden-sm-and-down"></v-col>
          </v-row>

     </v-container>
</template>

<script>

     import axios from 'axios'
     import toastr from "toastr";


    export default {
        name: "LoginFormComponent",

         data() {
              return {
                   email:'adminuser@mobilender.com',
                   password:'notsecret'
              }
         },

         methods: {
              login(){
                   const data = JSON.stringify({email:this.email, password:this.password});
                   axios.post("/login", data ,{ headers: { "content-type": "application/json"}})
                        .then((response)=>{
                         window.location.pathname = "/"
                   }).catch(error => {
                        toastr.error("Usuario o password incorrecto")
                   });
              }
         }
    }
</script>

<style  lang="scss" scoped>

     @import './src/assets/css/_variables.scss';

     .login-form{

          background-color: $background;
          height: 100%;

          &__container{
               border: 1px #ffffffc7 solid;
               padding: 36px;
               color: $black-title;
               background-color: $green-background;
               border-radius: 10px;
          }

     }

</style>
