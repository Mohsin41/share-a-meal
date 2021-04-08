<script>
import { mapActions } from 'vuex'
import browseangel from '@/components/browseangel-card.vue'
export default {
  name: 'browseAngel',
  components: { browseangel },
  data() {
    return {
      users: []
    }
  },
  async created() {
    this.users = (await this.fetchUsers()).filter(user => user.type=="FoodAngel" && user.availableMeal >0)
  },
  methods: {
    ...mapActions(['fetchUsers'])
  }
}
</script>

<template lang="pug">
.about
  .container
    .div(v-for="user in users")
        browseangel(:user="user" v-if="user")
        br
        br
        br
</template>