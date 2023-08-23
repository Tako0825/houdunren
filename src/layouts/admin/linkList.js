export default () => {
    return [
        {
            title: "Dashboard",
            options: [
                {
                    path: "/admin",
                    name: "工作台"
                },
                {
                    path: "/admin/animate",
                    name: "动态列表"
                },
                {
                    path: "/admin/util",
                    name: "组合API"
                }
            ]
        },
        {
            title: "编辑器",
            options: [
                {
                    path: "/admin/editor",
                    name: "富文本编辑器"
                },
                {
                    path: "/admin/markdown",
                    name: "Markdown"
                }
            ]
        },
        {
            title: "文件上传",
            options: [
                {
                    path: "/admin/upload/image",
                    name: "图片上传"
                }
            ]
        },
        {
            title: "错误页面",
            options: [
                {
                    path: "/error/404",
                    name: "404页面"
                },
                {
                    path: "/error/403",
                    name: "403页面"
                },
                {
                    path: "/error/500",
                    name: "500页面"
                }
            ]
        }
    ]
}