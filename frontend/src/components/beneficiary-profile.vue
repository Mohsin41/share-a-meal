<script>
export default {
    name:'beneficiaryProfile',
    props:['user']
}
</script>

<template lang="pug">
.box
    //div(v-if =user.type ==='FoodAngel' )
    h2 {{user.name}}
    h4 Doners:
    div(v-for="foodangel in user.foodangels")
        li {{ foodangel.name }}
              
</template>

<style lang="scss" scoped>
 .box{
     padding:2rem;
     border:1px solid #333;
     background:#ddd;
     border-radius:0.3rem;
 }
</style>