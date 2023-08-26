import admin from "@/routes/admin.js"
import login from "@/routes/login.js"
import register from "@/routes/register.js"
import error from "@/routes/error.js"
export default () => {
    return [
        {
            path: "/",
            name: "home",
            component: () => import("@/layouts/IndexPage.vue"),
        },
        ...admin,
        login,
        register,
        error
    ]
}