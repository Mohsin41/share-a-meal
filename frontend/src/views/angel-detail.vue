<script>
import AngelCard from '@/components/angel-card.vue'
import beneficiaryProfile from '@/components/beneficiary-profile.vue'
import { mapActions } from 'vuex'
export default {
  name: 'AngelDetail',
  components: {
    AngelCard,
    beneficiaryProfile,
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
    h1 {{user.name}}! logged in as {{user.type}}:
    AngelCard(:user="user" v-if="user.type=='FoodAngel'")
    beneficiaryProfile(:user="user" v-else-if="user.type=='Beneficiary'")
</template> 
