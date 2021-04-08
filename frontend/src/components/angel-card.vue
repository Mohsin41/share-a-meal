<script>
export default {
    name:'AngelCard',
    props:['user']
}
</script>

<template lang="pug">
.box
    //div(v-if =user.type ==='FoodAngel' )
    h2 {{user.name}}
    h3 AvailableMeal(s):({{user.availableMeal}})
    router-link(to='/create-meal') AddMeal
</template>

<style lang="scss" scoped>
 .box{
     padding:2rem;
     border:1px solid #333;
     background:#dd0;
     border-radius:0.3rem;
 }
</style>