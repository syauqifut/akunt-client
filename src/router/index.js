import { createRouter, createWebHistory } from 'vue-router';

//mengumpulkan name route
const routes = [
    {
        path: '/',
        name: 'transaction.index',
        component: () => import("../views/transaction/Index.vue")
    },
    {
        path: '/create',
        name: 'transaction.create',
        component: () => import("../views/transaction/Create.vue")
    },
    {
        path: '/edit/:id',
        name: 'transaction.edit',
        component: () => import("../views/transaction/Edit.vue")
    }
];

//untuk mengaktifkan routes
const router = createRouter({
    history: createWebHistory(),
    routes
});

//agar bisa import di main.js
export default router;