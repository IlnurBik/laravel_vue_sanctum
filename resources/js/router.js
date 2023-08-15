import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('./components/Post/Index.vue'),
        name: 'post.index',
    },
    {
        path: '/user/login',
        component: () => import('./components/User/Login.vue'),
        name: 'user.login',
    },
    {
        path: '/user/registration',
        component: () => import('./components/User/Registration.vue'),
        name: 'user.registration',
    },
    {
        path: '/user/personal',
        component: () => import('./components/User/Personal.vue'),
        name: 'user.personal',
    },
    {
        path: '/:pathMatch(.*)',
        component: () => import('./components/404.vue'),
        name: '404'
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('x_xsrf_token')

    if(!token){
        if(to.name === 'user.login' || to.name === 'user.registration'){
            next();
        }else{
            next({
                name: 'user.login'
            });
        }
    }
    if(token){
        if(to.name === 'user.login' || to.name === 'user.registration'){
            next({
                name: 'user.personal'
            });
        }else{
            next();
        }
    }
})


export default router;
