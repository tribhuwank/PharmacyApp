<template>
  <nav class="navbar has-shadow">

    <div class="container">

      <div class="navbar-brand">

        <a class="navbar-item" href="../">

          <img src="../assets/logo.png" alt="Bulma: a modern CSS framework based on Flexbox">

        </a>



        <div class="navbar-burger burger" data-target="navMenu">

          <span></span>

          <span></span>

          <span></span>

        </div>

      </div>



      <div id="navMenu" class="navbar-menu">

        <div class="navbar-end">

          <div class="navbar-item has-dropdown is-hoverable">

            <a class="navbar-link">

              Account

            </a>



            <div class="navbar-dropdown">

              <a class="navbar-item">

                Dashboard

              </a>

              <a class="navbar-item">

                Profile

              </a>

              <a class="navbar-item">

                Settings

              </a>

              <hr class="navbar-divider">
              <a class="navbar-item" @click="logout">
                Logout
              </a>
             

            </div>

          </div>

        </div>

      </div>

    </div>

  </nav>
</template>
<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>