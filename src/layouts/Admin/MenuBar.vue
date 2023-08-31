<template>
  <div class="w-full h-full flex flex-row justify-start items-center select-none">
    <all-application theme="outline" size="24" fill="#059669" class="cursor-pointer mr-3" @click="toggleCollapsed"/>
    <!-- 首页 -->
    <router-link 
      :to="{ 'name' : 'home'}" 
      class="hover:text-green-600 transition duration-200"
    >
      首页
    </router-link>
    <right theme="outline" size="16" fill="#333" class="px-2"/>
    <!-- 当前视图 -->
    <router-link 
      :to="$route" 
      class="hover:text-green-600 transition duration-200"
    >
      {{ $route.meta.title }}
    </router-link>
  </div>
</template>

<script>
import { AllApplication, Right } from '@icon-park/vue/lib/map';
export default {
  components: {
    AllApplication, Right
  },
  data() {
    return {
      collapsed: false
    }
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed
      this.$bus.$emit("collapsed", this.collapsed)
    }
  }
}
</script>

<style>
  
</style>