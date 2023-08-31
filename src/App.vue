<template>
  <div id="app" class="overflow-hidden">
    <screen-size></screen-size>
    <router-view></router-view>
  </div>
</template>

<script>
import ScreenSize from "@/components/ScreenSize.vue"

export default {
  name: 'App',
  components: {
    ScreenSize
  }
}
</script>

<style>
  @import "./main.css";
</style>
