<script>
import { mapActions,mapState } from 'vuex'


export default {
  name: 'CreateMeal',
  data() {
    return {
      availableMeal: 0,
      
    }
  },
  methods: {
    ...mapActions(['updateAvailableMeal']),
    async submitMeal(e) {
      e.preventDefault() 
      try {
        await this.updateAvailableMeal(
         this.availableMeal
        )
        this.$router.push(`/ `) 
      } catch (e) {
        this.backendError = e.response.data.message
      }
    }
  }
}
</script>

<template lang="pug">
.createMeal
    form( @submit="submitMeal")
      h1 Add number of meals you want to donate:
      label(for="availableMeal") availableMeal:&nbsp;
          input(v-model="availableMeal" id="availableMeal" type="number" placeholder="Add Meal" required)
      
      br
      button(type="submit") Save
    //- div(v-if="backendError") {{ backendError }}
    
</template>

<style lang="scss" scoped>
label {
  display: block;
  margin: 1rem 0;
}
</style>