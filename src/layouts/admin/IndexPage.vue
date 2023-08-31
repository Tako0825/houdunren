<template>
    <div class="w-screen h-screen flex">
        <!-- 导航栏 -->
        <div class="fixed z-10 md:block lg:relative container bg-gray-900 w-64 h-screen overflow-auto" :class="{ 'collapsed' : collapsed }">
            <NavigationBar/>
        </div>
        <div class="flex-1 flex flex-col justify-start">
            <!-- 菜单栏 -->
            <div class="w-full h-14 bg-white flex items-center pl-6 z-20 shadow-sm">
                <MenuBar/>
            </div>
            <!-- 任务栏 -->
            <div class="w-full h-auto bg-gray-50 flex items-center pl-6 z-0 shadow-sm">
                <TaskBar/>
            </div>
            <!-- 主视图 -->
            <div class=" flex-1 bg-gray-100 p-6 overflow-auto">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
  
<script>
    import NavigationBar from "@/layouts/admin/NavigationBar.vue"
    import MenuBar from "@/layouts/admin/MenuBar.vue"
    import TaskBar from "@/layouts/admin/TaskBar.vue";
    export default {
        components: {
            NavigationBar, MenuBar, TaskBar
        },
        created() {
            this.$bus.$on("collapsed",data => {
                this.collapsed = data
            })
        },
        data() {
            return {
                collapsed: false
            }
        }
    }
</script>

<style>
    .collapsed {
        display: none;
    }
</style>