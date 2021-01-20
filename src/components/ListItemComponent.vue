<template>
     <v-list-item class="mt-5 list-soft__item text--white">
          <v-btn class="ma-2 list-soft__btn " outlined max-width="25" color="#6ed5a5">
               <strong class="text-h6 font-weight-bold list-soft__label ">{{i}}</strong>
          </v-btn>
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
</template>

<script>
    export default {

        name: "ListItemComponent"

    }
</script>

<style scoped>

</style>
