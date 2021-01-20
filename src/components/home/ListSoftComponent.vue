<template>
     <v-card
          class="mx-auto mt-16 back-dark list-soft"
          max-width="1200"
          elevation="0"
     >
          <v-container>
               <v-row>
                    <v-icon large color="#6ed5a5">mdi-format-list-bulleted</v-icon>
                    <h2 class="white--text ml-2 mt-2">Listado de Softwares</h2>
                    <v-divider></v-divider>
                    <v-btn class="ma-2" id="btn-plus" outlined color="#6ed5a5">
                         <v-icon right dark>mdi-plus</v-icon>
                         <label for="btn-plus" class="white--text ml-2">AGREGAR NUEVO</label>
                    </v-btn>
               </v-row>
          </v-container>


          <hr>
          <v-list class="back-dark text-white">
               <v-list-item-group v-model="model">
                    <v-list-item v-for="(item, i) in items" :key="i" class="mt-5 list-soft__item text--white" @click="goToCredito">
                         <number-list :valor="i" class="mr-3"></number-list>
                         <v-list-item-content>
                              <v-list-item-title class="text-h6 list-soft__label" v-text="item.name"></v-list-item-title>
                         </v-list-item-content>
                         <v-list-item-content>
                              <v-list-item-title class="grey--text">Crédito Grupal</v-list-item-title>
                         </v-list-item-content>
                         <v-list-item-icon>
                              <v-icon  class="grey--text">mdi-chevron-right</v-icon>
                         </v-list-item-icon>
                    </v-list-item>
               </v-list-item-group>
          </v-list>
     </v-card>
</template>

<script>
    import axios from "axios";
    import toastr from "toastr";

    import NumberList from '../resource/NumberListComponent'

    export default {

         name: "ListSoftComponent",

         components:{
              NumberList
         },

         data: () => ({
              items: [],
              model: [1]
         }),

         created() {
             this.getList();
         },

         methods:{

             getList(){
                  axios.get("https://reqres.in/api/unknown")
                       .then((response)=>{
                              if(response.status === 200){
                                   this.items = response.data.data;
                              }else {
                                   toastr.error("Data no disponible");
                              }
                       }).catch(error => {
                       toastr.error("Data no disponible");
                  });
             },

             goToCredito(){
                  this.$router.push('/creditos')
             }
         }
    }
</script>

<style lang="scss" scoped>
     @import './src/assets/css/_variables.scss';

     .list-soft{

          &__item{
               border-radius: 8px;
               background-color: $grey-background;
          }

          &__btn{
               padding: 0px 6px !important;
               border: 3px solid !important;
          }
          &__label{
               color: white;
          }
     }
</style>
