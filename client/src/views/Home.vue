<template>
  <section>
    <page-header :v-if="$store.state.isUserLoggedIn"/> 
    
    <div class="columns is-desktop is-mobile" >        
      <page-sidenav :v-if="$store.state.isUserLoggedIn"/>     
      <div class="column is-10">
        <page-crums :v-if="$store.state.isUserLoggedIn"/>
      <transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
    </div>    
  </div>
<footer class="card-footer">
                <a href="#" class="card-footer-item">View All</a>
              </footer>
  </section>
  
</template>

<script>
import PageHeader from '@/components/Header.vue'
import PageSidenav from '@/components/Sidebar.vue'
import PageCrums from '@/components/Breadcrums.vue'
import {mapState} from 'vuex'

export default {  
   computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  components: {
    PageHeader,
    PageSidenav,    
    PageCrums,
  },
  async mounted () {
    if (!this.isUserLoggedIn) {
        this.$router.push({
            path: '/login'
        })
    }
  }
    
}
</script>

<style>
@import 'font-awesome/css/font-awesome.min.css';
@import '../css/googleapiFont.css';
@import 'bulma/css/bulma.css';

@import '../css/body.css';
#main{
 padding: 40px 20px;
}
</style>
