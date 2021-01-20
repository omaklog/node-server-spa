<template>
     <v-card class="mx-auto mt-16 back-dark creditos" max-width="1200" elevation="0">
          <v-container>

               <v-row>
                    <v-btn small color="#FFF" fab dark @click="goToBack">
                         <v-icon class="green--text">mdi-arrow-left</v-icon>
                    </v-btn>
                    <v-icon right dark class="green--text">mdi-magnify</v-icon>
                    <h2 class="white--text ml-2 mt-2">Inspeccionar</h2>
               </v-row>
               <v-row>
                    <v-col cols="12" class="mt-10  px-16">
                         <v-text-field
                              outlined
                              dark
                              label="N° Cliente, crédito, ID"
                              prepend-inner-icon="mdi-magnify"
                         ></v-text-field>
                    </v-col>
               </v-row>
          </v-container>

          <v-simple-table dark class="back-dark creditos__table px-16">
               <template v-slot:default>
                    <thead>
                    <tr>
                         <th class="text-left"></th>
                         <th class="text-left">Cliente</th>
                         <th class="text-left">Email</th>
                         <th class="text-left"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="creditos__card" v-for="(cliente, i ) of items" :key="i" @click="goToCambios">
                         <td class="text-center">
                              <v-avatar size="36px"><img :src="cliente.avatar" :alt="cliente.name"></v-avatar>
                         </td>
                         <td><strong class="grey--text">{{cliente.name}}</strong></td>
                         <td  class="grey--text">{{cliente.email}}</td>
                         <td > <v-icon  class="grey--text float-right" >mdi-chevron-right</v-icon></td>
                    </tr>
                    </tbody>
               </template>
          </v-simple-table>

     </v-card>
</template>

<script>
     import axios from "axios";
     import toastr from "toastr";

     export default {

          name: "InspeccionarComponent",

          data: () => ({
               items: []
          }),

          created() {
               this.getList();
               this.$root.$data.items = [
                    {
                         text: 'Home',
                         disabled: false,
                         href: 'home',
                    },
                    {
                         text: 'Buscar créditos grupales',
                         disabled: false,
                         href: '../creditos',
                    },
                    {
                         text: 'inspeccionar',
                         disabled: true,
                         href: 'inspeccionar',
                    },
               ]
          },

          methods:{

               goToBack(){
                    this.$router.push('/creditos')
               },

               goToCambios(){
                    this.$router.push('/creditos/inspeccionar/cambios')
               },

               getList(){
                    axios.get("https://reqres.in/api/users?page=1")
                         .then((response)=>{
                              if(response.status === 200){
                                   var state = [{color:'success--text', text: 'Finalizado'}, {color:'yellow--text', text:'En proceso'}, {color:'red--text', text: 'Rechazado'}]
                                   var user = ['@goytia', '@itaCapital','@landus']
                                   this.items = response.data.data.map(item=>{
                                        console.log(JSON.stringify(item));
                                        let obj = {};
                                        obj["name"] = item.first_name+' '+item.last_name;
                                        obj["email"] = item.email;
                                        obj["avatar"] = item.avatar;
                                        return obj;
                                   });
                              }else {
                                   toastr.error("Data no disponible");
                              }
                         }).catch(error => {
                         toastr.error("Data no disponible");
                    });
               }
          }
     }
</script>

<style lang="scss" scoped>
     @import './src/assets/css/_variables.scss';

     .creditos{

          &__card{
               border-radius: 8px;
               background-color: $grey-background;
               height: 60px;

          }
     }

</style>
