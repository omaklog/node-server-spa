<template>
     <v-card class="mx-auto mt-16 back-dark cambios" max-width="1200" elevation="0">
          <v-container>
               <v-row class="align-content-sm-center">
                    <v-btn color="#FFF" fab dark small @click="goToBack">
                         <v-icon class="green--text">mdi-arrow-left</v-icon>
                    </v-btn>
                    <v-icon right dark class="green--text">mdi-magnify</v-icon>
                    <h2 class="white--text ml-2 mt-2">Control de cambios</h2>
                    <v-divider></v-divider>
                    <v-btn class="ma-2" id="btn-plus" outlined color="#6ed5a5">
                         <v-icon right dark>mdi-magnify</v-icon>
                         <label for="btn-plus" class="white--text ml-2">Inspeccionar</label>
                    </v-btn>
               </v-row>
          </v-container>
          <hr class="mt-10">

          <v-simple-table dark class="back-dark px-16">
               <template v-slot:default>
                    <thead>
                    <tr>
                         <th class="text-left"></th>
                         <th class="text-left">Fecha</th>
                         <th class="text-left">Archivo</th>
                         <th class="text-left">Cambios</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="creditos__card" v-for="(item, i ) of items" :key="i">
                         <td><number-list :valor="item.id"></number-list></td>
                         <td class="grey--text">{{item.fecha}}</td>
                         <td><strong class="text-decoration-underline grey--text">{{item.archivo}}</strong></td>
                         <td class="grey--text">{{item.cambios}}</td>
                    </tr>
                    </tbody>
               </template>
          </v-simple-table>

     </v-card>
</template>

<script>
     import axios from "axios";
     import toastr from "toastr";

     import NumberList from '../resource/NumberListComponent'

     export default {

          name: "ControlCambiosComponent",

          components:{
               NumberList
          },

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
                         disabled: false,
                         href: 'inspeccionar',
                    },
                    {
                         text: 'Control de cambios',
                         disabled: true,
                         href: '/',
                    },
               ]
          },

          methods:{
               goToBack(){
                    this.$router.push('/creditos/inspeccionar')
               },

               getList(){
                    axios.get("https://reqres.in/api/unknown")
                         .then((response)=>{
                              if(response.status === 200){
                                   this.items = response.data.data.map(item=>{
                                        let obj = {};
                                        obj["id"] ='0'+item.id;
                                        obj["archivo"] = item.name+'.xml';
                                        obj["fecha"] = `${(Math.floor(Math.random() * 30)+1)}/${(Math.floor(Math.random() * 12)+1)}/${item.year}`;
                                        obj["cambios"] = "To keep ReqRes free, contributions towards server costs are appreciated!";
                                        return obj;
                                   });
                              }else {
                                   toastr.error("Data no disponible :(");
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
