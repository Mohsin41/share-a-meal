<script>
import AngelCard from '@/components/angel-card.vue'
import { mapActions } from 'vuex'
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
     this.user = await this.fetchUser(this.$route.params.id)
  },
  methods: {
    ...mapActions(['fetchUser'])
  }

}
</script>

<template lang="pug">
  .about
    <h1>Here is the detail view</h1>
    AngelCard(:user="user" v-if="user")
</template>
