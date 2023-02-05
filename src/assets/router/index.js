import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
    {
        path : '/',
        redirect : '/wall?id=0',
        name : 'index',
        components : {
            default : () => import('@/views/index.vue'),
            pc : () => import('@/views/index.vue'),
            mobile : () => import('~/components/mobile/index.vue')
        },
        children : [{
            path : 'wall',
            components : {
               default: () => import('@/views/WallMessage.vue'),
               pc : () => import('@/views/WallMessage.vue'),
               mobile : () => import('~/components/mobile/WallMessage.vue')
            }}
    ]
    }
]
const router = createRouter({
    history : createWebHashHistory(),
    routes
})
export default router