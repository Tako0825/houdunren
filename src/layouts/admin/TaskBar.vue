<template>
  <div class="w-full h-14 bg-gray-50 border-b-2 shadow-sm pl-2 flex flex-row justify-start items-center text-xs" v-if="taskList.length">
    <router-link 
      v-for="(item) in taskList" 
      :to="item.path"
      :key="item.name"
      class="border-2 px-4 py-2 mx-1 rounded-md hover:bg-green-600 hover:text-white border-green-600 transition duration-200 cursor-pointer"
      :class="{'active' : item.name === current.name}"
    >
      {{ item.meta.title }}
    </router-link>
    <span 
      v-if="taskList.length" 
      class="px-4 py-2 text-gray-400 hover:text-green-600 cursor-pointer transition duration-200"
      @click="taskList=[]"
    >一键清除</span>
  </div>
</template>

<script>
import { router } from '@/plugins/router';
export default {
  mounted() {
    // 生命周期钩子: 记录变更后的路由
    router.afterEach((to) => {
      if(!this.taskList.filter(item => {
        return item.name === to.name
      }).length) {
        this.taskList.push(to)
      }
      this.current = to
    })
  },
  data() {
    return {
      taskList: [],
      current: null
    }
  }
}
</script>

<style>
  .active {
    background-color: #34495e!important;
    border-color: #34495e!important;
    color: #fff;
  }
</style>