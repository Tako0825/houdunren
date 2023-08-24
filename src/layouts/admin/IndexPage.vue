<template>
  <div class="w-full h-screen flex flex-row">
    <!-- 导航栏 -->
    <div class="w-72 h-auto overflow-auto bg-gray-800 p-4">
      <NavigationBar/>
    </div>
    <div class="w-full flex flex-col">
      <!-- 菜单栏 -->
      <div class="h-14 bg-white border-b-2 shadow-sm">
        <MenuBar/>
      </div>
      <!-- 任务栏 -->
        <TaskBar/>
      <!-- 主视图 -->
      <div class="bg-gray-50">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/layouts/Admin/NavigationBar.vue"
import MenuBar from "@/layouts/Admin/MenuBar.vue"
import TaskBar from "@/layouts/Admin/TaskBar.vue";
export default {
  components: {
    MenuBar, NavigationBar, TaskBar
  }
}
</script>

<style>

</style>