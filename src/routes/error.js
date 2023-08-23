export default [
    {
        path: "/error/404",
        name: "error-404",
        component: () => import("@/views/Error/Error-404.vue")
    },
    {
        path: "/error/403",
        name: "error-403",
        component: () => import("@/views/Error/Error-403.vue")
    },
    {
        path: "/error/500",
        name: "error-500",
        component: () => import("@/views/Error/Error-500.vue")
    }
]