import { ErrorComputer } from "@icon-park/vue"
export default {
    path: "/error",
    name: "error",
    meta: { title: "错误页面", icon: ErrorComputer },
    component: () => import("@/views/error/DefaultView.vue"),
    children: [
        {
            path: "404",
            name: "error-404",
            meta: { title: "404页面" },
            component: () => import("@/views/error/Error-404.vue")
        },
        {
            path: "403",
            name: "error-403",
            meta: { title: "403页面" },
            component: () => import("@/views/error/Error-403.vue")
        },
        {
            path: "500",
            name: "error-500",
            meta: { title: "500页面" },
            component: () => import("@/views/error/Error-500.vue")
        }
    ]
}