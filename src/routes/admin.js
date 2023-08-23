export default {
    path: "/admin",
    name: "admin",
    component: () => import("@/layouts/Admin/IndexPage.vue"),
    children: [
        {
            path: "animate",
            name: "animate",
            component: () => import("@/views/Admin/AnimateView.vue")
        },
        {
            path: "util",
            name: "util",
            component: () => import("@/views/Admin/UtilView.vue")
        },
        {
            path: "editor",
            name: "editor",
            component: () => import("@/views/Admin/EditorView.vue")
        },
        {
            path: "markdown",
            name: "markdown",
            component: () => import("@/views/Admin/MarkdownView.vue")
        },
        {
            path: "upload/image",
            name: "upload-image",
            component: () => import("@/views/Admin/UploadImage.vue")
        }
    ]
}