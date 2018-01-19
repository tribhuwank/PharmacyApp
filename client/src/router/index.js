import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/login.vue'
import Register from '@/views/register.vue'
import NotFound from '@/views/404.vue'
import Home from '@/views/Home.vue'

Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/login',
      cors:'true',
      component: Login,
      name: '',
      hidden: true
  }, 
  {
    path: '/register',
    cors:'true',
    component: Register,
    name: '',
    hidden: true
},    
  {
      path: '/404',
      cors:'true',
      component: NotFound,
      name: '',
      hidden: true
  },
  
  {
      path: '/',
      cors:'true',
      component: Home,
      name: 'Dashboard',
      iconCls: 'fa fa-tachometer ',//Icon style class
      children: [
          { path: '/home', component: Home, name: 'Home', hidden: false },             
      ]
  },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
