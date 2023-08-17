export default () => {
    return [{
        path: "/admin",
        alias: "/",
        name: "admin",
        component: () => import("@/layouts/admin/IndexPage.vue"),
        children: [{
            path: "a",
            name: "AdminA",
            component: () => import("@/views/admin/AdminA.vue")
        },{
            path: "b",
            name: "AdminB",
            component: () => import("@/views/admin/AdminB.vue")
        }]
    }]
}