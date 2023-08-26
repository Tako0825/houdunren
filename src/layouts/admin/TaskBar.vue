<template>
  <div class="w-full h-14 flex flex-row justify-start items-center text-xs overflow-auto" v-if="taskList.length">
    <router-link 
      v-for="(item) in taskList" 
      :to="item.path"
      :key="item.name"
      class="border-2 border-green-500 px-4 py-2 mx-1 rounded-md hover:bg-green-600 hover:text-white hover:border-green-600 transition duration-200 cursor-pointer whitespace-nowrap"
      :class="{'actived' : item.name === $route.name}"
    >
      {{ item.meta.title }}
    </router-link>
    <button 
      v-if="taskList.length" 
      class="px-4 py-2 text-gray-400 hover:text-green-600 font-bold cursor-pointer transition duration-200 whitespace-nowrap"
      @click="taskList=[]"
    >
      清空任务
    </button>
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
  .actived {
    background-color: #34495e!important;
    border-color: #34495e!important;
    color: #fff;
  }
</style>