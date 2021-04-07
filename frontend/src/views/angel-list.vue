<script>
// @ is an alias to /src
import { mapActions } from 'vuex'
import AngelCard from '@/components/angel-card.vue'
export default {
  name: 'FoodAngels',
  components: {
    AngelCard,
  },
  data() {
    return {
      users: [],
    }
  },
  async created() {

    this.users = await this.fetchUsers()
    
    //.filter(user => user.type=='Beneficiary')
  },
   methods: {
    ...mapActions(['fetchUsers'])
  }

}
</script>

<template lang="pug">
  .home
    h1 Share a Meal
    h2 Angels
    div(v-for="user in users" )
      router-link(:to="`/users/${user._id}`") {{user.name}}
</template>
