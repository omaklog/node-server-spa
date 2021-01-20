<template>
    <div class="number-list">
         {{valor}}
    </div>
</template>

<script>
    export default {
        name: "NumberListComponent",

        props:{
             valor:{
                  default:""
             }
        }
    }
</script>

<style scoped>

     .number-list{
          border: #6ed5a5 3px solid;
          text-align: center;
          font-weight: bold;
          font-size: 1.1em;
          padding: 3px 11px;
          max-width: 50px;
          border-radius: 2px;
          color: #FFF;
     }
</style>
