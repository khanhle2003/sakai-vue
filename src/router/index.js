import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/views/client/components/LayoutClient.vue'),
            children: [
                {
                    path: '',
                    name: 'DashboardClient',
                    component: () => import('@/views/client/DashboardClient.vue')
                }
            ]
        },
        {
            path: '/admin',
            component: AppLayout,
            children: [
                {
                    path: '',
                    name: 'Dashboard',
                    component: () => import('@/views/admin/Dashboard.vue')
                },
                {
                    path: 'book-manager',
                    name: 'BookManager',
                    component: () => import('@/views/admin/BookManager.vue')
                },
                {
                    path: 'author-manager',
                    name: 'AuthorManager',
                    component: () => import('@/views/admin/AuthorManager.vue')
                },
                {
                    path: 'genre-manager',
                    name: 'GenreManager',
                    component: () => import('@/views/admin/GenreManager.vue')
                },
                {
                    path: 'cart-manager',
                    name: 'CartManager',
                    component: () => import('@/views/admin/CartManager.vue')
                },
                {
                    path: 'content-manager',
                    name: 'ContentManager',
                    component: () => import('@/views/admin/ContentManager.vue')
                },
                {
                    path: 'statistical',
                    name: 'Statistical',
                    component: () => import('@/views/admin/Statistical.vue')
                },
                {
                    path: 'customer-manager',
                    name: 'CustomerManager',
                    component: () => import('@/views/admin/CustomerManager.vue')
                }
            ]
        },
        {
            path: '/landing',
            name: 'landing',
            component: () => import('@/views/pages/Landing.vue')
        },
        {   
            path: '/admin', 
            component: () => import('@/views/layout/AppLayout.vue'),
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('@/views/admin/Dashboard.vue')
                },
                {
                    path: '/transaction',
                    name: 'transaction',
                    component: () => import('@/views/admin/Transaction.vue')
                }
            ]
        },
        {
            path: '/landing',
            name: 'landing',
            component: () => import('@/views/pages/Landing.vue')
        },
        {
            path: '/pages/notfound',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        },

        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue')
        },
        {
            path: '/auth/access',
            name: 'accessDenied',
            component: () => import('@/views/pages/auth/Access.vue')
        },
        {
            path: '/auth/error',
            name: 'error',
            component: () => import('@/views/pages/auth/Error.vue')
        },
        {
            path: '/auth/register',
            name: 'register',
            component: () => import('@/views/pages/auth/Register.vue')
        },
        {
            path: '/auth/forget-password',
            name: 'forgetPassword',
            component: () => import('@/views/pages/auth/ForgetPassword.vue')
        },
        {
            path: '/auth/passwordReset',
            name: 'resetPassword',
            component: () => import('@/views/pages/auth/ResetPassword.vue')
        }
    ]
});

export default router;
