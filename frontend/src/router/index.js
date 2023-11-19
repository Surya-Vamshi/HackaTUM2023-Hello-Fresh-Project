import { createRouter,createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        // {
        //     path: '/account-management',
        //     name: 'GroupManagement',
        //     component: () => import('@/views/Group-test.vue'),
        // },
        {
            path: '/personalisation',
            name: 'Personalisation',
            component: () => import('@/views/Recipe-Personalisation.vue'),
        },
        {
            path: '/help',
            name: 'Help',
            component: () => import('@/views/Help-Page.vue'),
        },
        {
            path: '/user-personalisation',
            name: 'UserPersonalisation',
            component: () => import('@/views/User-Personalisation.vue'),
        },
        {
            path: '/recipe-overview',
            name: 'Recipe-Overview',
            component: () => import('@/components/Recipe-Overview.vue'),
        },
    ]
});

export default router;
