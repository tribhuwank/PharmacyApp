<template>
    <section class="hero is-success is-fullheight">

    <div class="hero-body">

      <div class="container has-text-centered">

        <div class="column is-4 is-offset-4">

          <h3 class="title has-text-grey">Login</h3>

          <p class="subtitle has-text-grey">Please login to proceed.</p>

          <div class="box">

            <figure class="avatar">

              <img src="https://placehold.it/128x128">

            </figure>

            <form>

              <div class="field">

                <div class="control">

                  <input v-model="email" class="input is-large" type="email" placeholder="Your Email" autofocus="">

                </div>

              </div>



              <div class="field">

                <div class="control">

                  <input v-model="password" class="input is-large" type="password" placeholder="Your Password">

                </div>

              </div>

              <div class="field">

                <label class="checkbox">

                  <input type="checkbox">

                  Remember me

                </label>

              </div>

              <a class="button is-block is-info is-large" >Login</a>

            </form>

          </div>

          <p class="has-text-grey">

            <a href="../">Sign Up</a> &nbsp;·&nbsp;

            <a href="../">Forgot Password</a> &nbsp;·&nbsp;

            <a href="../">Need Help?</a>

          </p>

        </div>

      </div>

    </div>

  </section>
</template>
<style>
@import 'font-awesome/css/font-awesome.min.css';
@import '../css/googleapiFont.css';
@import 'bulma/css/bulma.css';
@import '../css/login.css';
</style>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}

</script>
