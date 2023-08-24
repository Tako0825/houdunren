<template>
  <div class="w-full h-full flex flex-row justify-start items-center pl-4">
    <!-- 首页 -->
    <router-link 
      :to="{ 'name' : 'home'}" 
      class="hover:text-green-600 transition duration-200"
    >
      首页
    </router-link>
    <span class="mx-2">/</span>
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
export default {
  data() {
    return {
    }
  }
}
</script>

<style>

</style>