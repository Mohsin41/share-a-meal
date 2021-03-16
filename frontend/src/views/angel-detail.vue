<script>
import axios from 'axios'
import AngelCard from '@/components/angel-card.vue'
export default {
  name: 'AngelDetail',
  components: {
    AngelCard,
  },
  data() {
    return {
      user: {},
    }
  },
  async created() {
    const userRequest = await axios.get(`/api/users/${this.$route.params.id}`)
    this.user = userRequest.data
  },
}
</script>

<template lang="pug">
  .about
    <h1>Here is the detail view</h1>
    AngelCard(:user="user" v-if="user")
</template>
