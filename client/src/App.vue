<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer persistent :mini-variant="miniVariant" 
      :clipped="toolabar.clippedLeft && !nav.right || toolabar.clippedRight"
      v-model="drawer" enable-resize-watcher app :right="nav.right" >
      <v-list>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i" >
          <v-list-tile-action>
            <v-icon light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- TOOLBAR -->
    <v-toolbar fixed app class="blue"
      :clipped-left="toolabar.clippedLeft"
      :clipped-right="toolabar.clippedRight"
    >
      
      <v-btn icon light @click.stop="miniVariant = !miniVariant" >
        <v-icon v-html="miniVariant ? 'fa-align-justify ' : 'fa-align-justify '"></v-icon>
      </v-btn>
      
    <v-toolbar-items>
      <v-btn 
        v-if="!$store.state.isUserLoggedIn"
        flat 
        dark
        :to="{
          name: 'login'
        }">
        Login
      </v-btn>
      
      <v-btn 
        v-if="!$store.state.isUserLoggedIn"
        flat 
        dark
        :to="{
          name: 'register'
        }">
        Sign Up
      </v-btn>
      
      <v-btn 
        v-if="$store.state.isUserLoggedIn"
        flat 
        dark
        @click="logout">
        Log Out
      </v-btn>
    </v-toolbar-items>
  
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <v-slide-y-transition mode="out-in">
            <v-layout>
              <router-view></router-view>
                          </v-layout>
          </v-slide-y-transition>
        </v-container>
      </v-content>
    </main>
          
      <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
      return {
        clipped: false,
        toolabar: {
          clippedLeft: false,
          clippedRight: false
        },
        nav: {
          right: false
        },
        drawer: true,
        fixed: false,
        items: [{
          icon: 'fa-heartbeat fa-5x',
          title: 'Pherma App'
        }],
        miniVariant: false,
        right: true
      }
    },
    methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>