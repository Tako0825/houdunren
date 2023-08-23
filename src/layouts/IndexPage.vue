<template>
  <div class="w-screen h-screen flex justify-center items-center bg-gray-700">
    <div class="container w-full flex flex-col justify-center items-center transform -translate-y-20 select-none px-4">
      <img src="@/assets/logo.png" alt="" class=" box-content w-36 h-36 p-12 transform translate-y-20">
      <h1 class="grandient-text select-text font-blod text-6xl py-8">Vue-CLI</h1>
      <p class="text-sm text-green-50 py-1 select-text">使用 Vue2 | Vue-cli | Vue-Router | Vue-x | Webpack | NestJs | Axios | TailwindCss</p>  
      <p class="text-sm text-green-100 py-1 select-text">技术支持 - <span class="select-all">houdunren.com</span> 重构后盾网前端脚手架项目</p>
      <div class="flex flex-col md:flex-row">
        <router-link to="/login" class="bg-blue-400 px-6 py-2 mx-2 my-2 rounded-md text-white font-bold hover:bg-blue-300 transition duration-200">登录</router-link>
        <router-link to="/register" class="bg-indigo-500 px-6 py-2 mx-2 my-2 rounded-md text-white font-bold hover:bg-indigo-400 transition duration-200">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .grandient-text {
    font-size: 48px;
    background: linear-gradient(to right, #ff9900, #ff3300);
    -webkit-background-clip: text; /* 使用 WebKit 前缀以支持某些浏览器 */
    background-clip: text;
    color: transparent; /* 文本变为透明，以显示背景渐变 */
  }
</style>