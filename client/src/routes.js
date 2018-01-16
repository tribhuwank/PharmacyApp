import Login from '@/views/login.vue'
import NotFound from '@/views/404.vue'
import Home from '@/views/Home.vue'
import HelloWorld from '@/components/HelloWorld'

let routes = [
    {
        path: '/login',
        cors:'true',
        component: Login,
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
    }]
