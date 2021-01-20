<template>
     <v-card
          class="mx-auto mt-16 back-dark list-soft"
          max-width="1200"
          dark
     >
          <v-list>
               <v-list-item-group
                    v-model="model"
                    color="#6ed5a5"
               >
                    <v-list-item
                         color="#b4dac5"
                         v-for="(item, i) in items"
                         :key="i"
                         class="mt-5 list-soft__item"
                    >
                         <v-btn
                              class="ma-2 list-soft__btn "
                              outlined
                              max-width="25"
                              color="#6ed5a5"
                         >
                              <strong class="text-h6 font-weight-bold list-soft__label ">{{i}}</strong>
                         </v-btn>
                         <v-list-item-content>
                              <v-list-item-title class="text-h6 " v-text="item.text"></v-list-item-title>
                         </v-list-item-content>
                         <v-list-item-icon>
                              <v-icon>mdi-chevron-right</v-icon>
                         </v-list-item-icon>


                    </v-list-item>
               </v-list-item-group>
          </v-list>
     </v-card>
</template>

<script>
    export default {
        name: "ListSoftComponent",

         data: () => ({
              items: [
                   {
                        icon: 'mdi-wifi',
                        text: 'Wifi',
                   },
                   {
                        icon: 'mdi-bluetooth',
                        text: 'Bluetooth',
                   },
                   {
                        icon: 'mdi-chart-donut',
                        text: 'Data Usage',
                   },
              ],
              model: [1],
         }),
    }
</script>

<style lang="scss" scoped>
     @import './src/assets/css/_variables.scss';

     .list-soft{

          &__item{
               margin: 15px;
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
