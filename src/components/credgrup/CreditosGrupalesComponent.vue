<template>
     <v-card class="mx-auto mt-16 back-dark creditos" max-width="1200" elevation="0">
          <v-container>
               <v-row>
                    <h2 class="white--text ml-2 mt-2">Buscar Creditos Grupales</h2>
                    <v-divider></v-divider>
                    <v-btn class="ma-2" id="btn-plus" outlined color="#6ed5a5"  @click="goToInspeccionar">
                         <v-icon right dark>mdi-magnify</v-icon>
                         <label for="btn-plus" class="white--text ml-2">Inspeccionar</label>
                    </v-btn>
               </v-row>
          </v-container>
          <hr>

          <v-simple-table dark class="back-dark creditos__table">
               <template v-slot:default>
                    <thead>
                    <tr>
                         <th class="text-left">Archivo</th>
                         <th class="text-left">Expedición</th>
                         <th class="text-left">% Calidad de información</th>
                         <th class="text-left">Estatus</th>
                         <th class="text-left">Finalización</th>
                         <th class="text-left">Usuario</th>
                         <th class="text-left">Acciones</th>
                         <th class="text-left"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="creditos__card" v-for="(cred, i ) of items" :key="i" @click="goToInspeccionar">
                         <td><strong class="text-decoration-underline grey--text">{{cred.archivo}}</strong></td>
                         <td>{{cred.expedicion}}</td>
                         <td>{{cred.calidad}}</td>
                         <td><label :class="cred.status.color">{{cred.status.text}}</label></td>
                         <td>{{cred.finish}}</td>
                         <td>{{cred.user}}</td>
                         <td><v-icon>mdi-file-import</v-icon></td>
                         <td> <v-icon  class="grey--text">mdi-chevron-right</v-icon></td>
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

          name: "CreditosGrupalesComponent",

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
                         disabled: true,
                         href: 'creditos',
                    },
               ]
          },

          methods:{
               goToInspeccionar(){
                         this.$router.push('/creditos/inspeccionar')
               },
               getList(){
                    axios.get("https://reqres.in/api/unknown")
                         .then((response)=>{
                              if(response.status === 200){
                                   var state = [{color:'success--text', text: 'Finalizado'}, {color:'yellow--text', text:'En proceso'}, {color:'red--text', text: 'Rechazado'}]
                                   var user = ['@goytia', '@itaCapital','@landus']
                                   this.items = response.data.data.map(item=>{
                                        let obj = {};
                                        obj["archivo"] = item.name+'.xml';
                                        obj["expedicion"] = `${(Math.floor(Math.random() * 30)+1)}/${(Math.floor(Math.random() * 12)+1)}/${item.year}`;
                                        obj["calidad"] = (Math.floor(Math.random() * 100)+1);
                                        obj["status"] = state[Math.floor(Math.random() * 3)];
                                        obj["finish"] = `${(Math.floor(Math.random() * 30)+1)}/${(Math.floor(Math.random() * 12)+1)}/${item.year}`;
                                        obj["user"] = user[Math.floor(Math.random() * 2)];
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
