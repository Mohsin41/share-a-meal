<script>
// @ is an alias to /src
import axios from 'axios'
import AngelCard from '@/components/angel-card.vue'

export default {
  name: 'Home',
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
    angel-card(v-for="user in users" :user="user")
</template>
