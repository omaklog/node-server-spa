<template>
    <v-app-bar app class="main-bar" dark>
        <v-container>
            <v-row>
                <strong class="main-bar__title" >Integra</strong>
                <strong class="main-bar__subtitle">Software</strong>
                <v-spacer></v-spacer>
                <strong class="text--success mt-1 mr-1">Nombre Apellidos</strong>
                <v-avatar size="36px">

                    <img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460">
                </v-avatar>
                <v-icon>mdi-chevron-down</v-icon>
            </v-row>
        </v-container>

        <v-spacer/>


    </v-app-bar>
</template>

<script>
    export default {
        name: "MainBarComponent"
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
