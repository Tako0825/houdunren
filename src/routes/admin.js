export default {
    path: "/admin",
    name: "admin",
    meta: { auto: true, title: "工作台" },
    component: () => import("@/layouts/Admin/IndexPage.vue"),
    children: [
        {
            path: "animate",
            name: "animate",
            meta: { title: "动态列表" },
            component: () => import("@/views/Admin/AnimateView.vue")
        },
        {
            path: "util",
            name: "util",
            meta: { title: "组合API" },
            component: () => import("@/views/Admin/UtilView.vue")
        },
        {
            path: "editor",
            name: "editor",
            meta: { title: "富文本编辑器" },
            component: () => import("@/views/Admin/EditorView.vue")
        },
        {
            path: "markdown",
            name: "markdown",
            meta: { title: "Markdown" },
            component: () => import("@/views/Admin/MarkdownView.vue")
        },
        {
            path: "upload/image",
            name: "upload-image",
            meta: { title: "图片上传" },
            component: () => import("@/views/Admin/UploadImage.vue")
        }
    ]
}