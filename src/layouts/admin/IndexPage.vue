<template>
  <div class="w-full h-screen flex flex-row">
    <!-- 导航栏 -->
    <div class="w-72 h-auto overflow-auto bg-gray-800 p-4">
      <NavigationBar/>
    </div>
    <div class="w-full flex flex-col">
      <!-- 菜单栏 -->
      <div class="h-14 bg-gray-100 border-b-2 shadow-sm">
        <MenuBar/>
      </div>
      <!-- 主视图 -->
      <div class="bg-gray-50">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import MenuBar from "@/layouts/Admin/MenuBar.vue"
import NavigationBar from "@/layouts/Admin/NavigationBar.vue"
export default {
  components: {
    MenuBar, NavigationBar
  }
}
</script>

<style>

</style>