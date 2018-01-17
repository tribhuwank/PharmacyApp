<template>
  <div id="app"> 
    <page-header :v-if="$store.state.isUserLoggedIn"/>
    <div class="columns is-desktop is-mobile" >
      <page-sidenav :v-if="$store.state.isUserLoggedIn"/>      
      <div class="hero level is-desktop is-mobile" id="main">
        <page-crums :v-if="$store.state.isUserLoggedIn"/>
        <router-view/>
      </div>      
    </div>
    <page-footer :v-if="$store.state.isUserLoggedIn"/>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
import PageFooter from '@/components/Footer.vue'
import PageSidenav from '@/components/Sidebar.vue'
import PageCrums from '@/components/Breadcrums.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    PageSidenav,
    PageFooter,
    PageCrums,
  }
  
}
</script>

<style>
@import 'font-awesome/css/font-awesome.min.css';
@import './css/googleapiFont.css';
@import 'bulma/css/bulma.css';

@import './css/body.css';
#main{
 padding: 40px 20px;
}
</style>
