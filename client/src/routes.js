import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'



let routes = [
    {
        path: '/login',
        cors:'true',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/system',
        cors:'true',
        component: SystemSetting,
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
    
    //{ path: '/setting', component: Setting },
    {
        path: '/',
        cors:'true',
        component: Home,
        name: 'Dashboard',
        iconCls: 'fa fa-tachometer ',//Icon style class
        children: [
            { path: '/main', component: Main, name: 'Home', hidden: false },             
        ]
    },
    
    {
        path: '*',
        cors:'true',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;
