<template>
    <section class="hero is-success is-fullheight">

    <div class="hero-body">

      <div class="container has-text-centered">

        <div class="column is-4 is-offset-4">

          <h3 class="title has-text-grey">Register</h3>

          <p class="subtitle has-text-grey">Please register to proceed.</p>

          <div class="box">         

            <form>

                <div class="field">

                <div class="control">

                  <input v-model="name" class="input is-large" type="text" placeholder="Your Name" autofocus="">

                </div>

              </div>

              <div class="field">

                <div class="control">

                  <input v-model="email" class="input is-large" type="email" placeholder="Your Email" autofocus="">

                </div>

              </div>
            <div class="field">

                <div class="control">

                  <input v-model="mobile" class="input is-large" type="mobile" placeholder="Your Mobile" autofocus="">

                </div>

              </div>


              <div class="field">
                <div class="control">
                  <input v-model="password" class="input is-large" type="password" placeholder="Your Password">
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input v-model="confirmPassword" class="input is-large" type="password" placeholder="Confirm Password">
                </div>
              </div>
              <div class="field">
                <input v-model="gender" class="is-checkradio " id="exampleRtlRadioInline1" type="radio" name="gender" checked="checked">
                <label for="exampleRtlRadioInline1">Male</label>
                <input class="is-checkradio " id="exampleRtlRadioInline2" type="radio" name="gender">
                <label for="exampleRtlRadioInline2">Female</label>
              </div>
             <div class="field">
                <input v-model="agree" class="is-checkradio" id="exampleRtlCheckbox" type="checkbox" name="exampleRtlCheckbox" checked="checked">
                <label for="exampleRtlCheckbox">I agree to the <a href="#">terms and conditions</a></label>
              </div>

      
              <a class="button is-block is-info is-large"  >Register</a>

            </form>

          </div>

          <p class="has-text-grey">

            <a href="../">Log In</a> &nbsp;·&nbsp;

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
@import 'bulma-extensions/bulma-checkradio/bulma-checkradio.css';
@import '../css/login.css';
</style>
<script>
import AuthenticationService from '@/services/AuthenticationService'
const openNotification = (propsData = {
  title: '',
  message: '',
  type: '',
  direction: '',
  duration: 4500,
  container: '.notifications'
}) => {
  return new NotificationComponent({
    el: document.createElement('div'),
    propsData
  })
}
export default {
  data () {
    return {
      name:'',
      email: '',
      mobile:'',
       gender:'',
      password: '',      
      confirmPassword:'',
      agree:''
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          name:this.name,            
          email: this.email,
          gender:this.gender,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          path: '/login'
        })
      } catch (error) {
        openNotification({
        title: 'Error',
        message: error.response.data.error,
        type: type
      })

        
      }
    }
  }
}

</script>
