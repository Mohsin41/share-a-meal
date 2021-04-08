<script>
import { mapActions } from 'vuex'
export default {
  name: 'browseangel',
  props: ['user'],
  data() {
    return {
      //user:null
    }
  },
//    async created() {
//     this.user = await this.fetchUser(this.$route.params.id)
//   },
   methods: {
     ...mapActions(['order','fetchUser']),
//     async submitOrder(e) {
//       e.preventDefault() 
//       try {
//         await this.order( this.user)
//         this.$router.push(`/ `) 
//       } catch (e) {
//         this.backendError = e.response.data.message
//       }
 // }
  },
}
</script>

<template lang="pug">
.box
    .card
        .card-body
        h5.card-title {{ user.name }}
        p.card-text Address: {{ user.address }} 
        p.card-text Contact: {{ user.cellPhone }} 
        p.card-text AvailableMeal:{{ user.availableMeal }} 
        button(@click="order(user._id)") Order
       
</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 2px solid #0074D9;
  border-radius: 0.3rem;
  background:#7FDBFF;
}
</style> 