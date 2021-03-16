<script>
// @ is an alias to /src
import axios from 'axios'
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
    const usersRequest = await axios.get('/api/users')
    this.users = usersRequest.data
  },
}
</script>

<template lang="pug">
  .home
    h1 Share a Meal
    h2 Angels
    div(v-for="user in users" )
      router-link(:to="`/users/${user._id}`") {{user.name}}
</template>
