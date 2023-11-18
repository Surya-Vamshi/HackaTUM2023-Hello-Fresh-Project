import { createRouter,createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/account-management',
            name: 'GroupManagement',
            component: () => import('@/views/Group-test.vue'),
        },
    ]
});

export default router;
