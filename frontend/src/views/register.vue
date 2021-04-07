<script>
import { mapActions } from 'vuex'

export default {
  name: 'register',
  data() {
    return {
      name: '',
      cellPhone: null,
      email: '',
      password: '',
      type:   '',
      backendError: null,
      
    }
  },
  methods: {
    ...mapActions(['register']),
    async submitLogin(e) {
      e.preventDefault()

      try {
        await this.register({
          name: this.name,
          cellPhone: this.cellPhone,
          email: this.email,
          password: this.password,
          type:this.type
        })

        this.$router.push('/login')
      } catch (e) {
        this.backendError = e.response.data.message
      }
    },
  },
}
</script>

<template lang="pug">
.register
    form( @submit="submitLogin")
      h1 Create a new account
      label(for="type") Type:&nbsp;
        select(v-model='type') Type:&nbsp;
          option(disabled value='' ) Please select one type
          option(value='FoodAngel') Doner
          option(value='Beneficiary') Seeker
          // span {{ type }}

      
      label(for="name") Name:&nbsp;
        input(v-model="name" id="name" type="text" placeholder="Your name" required)
      label(for="cellPhone") Phone:&nbsp;
        input(v-model="cellPhone" id="cellPhone" type="Number" placeholder="Your Number" required)
      label(for="email") Email:&nbsp;
        input(v-model="email" id="email" type="email" placeholder="Your email" required)
      label(for="password") Password:&nbsp;
        input(v-model="password" id="password" type="password" placeholder="Your password" required)
      input(type="submit" value="Register")
    div(v-if="backendError") {{ backendError }}
    div Already have an account? <router-link to="/login">Log in</router-link>
</template>

<style lang="scss" scoped>
label {
  display: block;
  margin: 1rem 0;
}
</style>
