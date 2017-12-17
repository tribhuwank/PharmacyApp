import Vue from 'vue'
import App from './App'
import VueRouter  from './router'
import ElementUI from 'element-ui'
import routes from './routes'


Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  //NProgress.start();  
  if (to.path == '/login') {
    sessionStorage.removeItem('token');
  }
  let toekn = JSON.parse(sessionStorage.getItem('token'));  
  if (!toekn && to.path !== '/login')  {
    next({ path: '/login' })
  } else {
    next()
  }
})
