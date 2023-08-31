<template>
    <div class="bg-gray-700 h-screen flex justify-center items-center select-none">
      <div class="container box-content w-64 md:w-96 h-96 md:h-64 p-4 bg-gray-200 flex flex-col md:flex-row items-center justify-center rounded-lg transform scale-110">
        <div class="w-full md:w-2/3 flex flex-col justify-center items-center">
          <h1 class="py-4">用户登录</h1>
          <!-- 表单 -->
          <form action="/admin" method="GET" class="w-full text-gray-500 flex flex-col items-center">
            <InputText name="用户名"/>
            <InputPassword name="密码"/>
            <InputSubmit name="登录" class="my-2"/>
          </form>

          <div class="absolute bottom-1 text-xs font-bold text-gray-500">
            <router-link to="/register" class="px-2 hover:text-green-600 transition cursor-pointer">注册账号</router-link>
            <router-link to="/" class="px-2 hover:text-green-600 transition cursor-pointer">返回首页</router-link>
          </div>
        </div>
        <div class="w-1/3 flex justify-center">
          <img class="w-24 h-24" src="@/assets/logo.png">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import InputText from "@/components/InputText.vue"
  import InputPassword from "@/components/InputPassword.vue"
  import InputSubmit from "@/components/InputSubmit.vue"
  export default {
    components: {
      InputText, InputPassword, InputSubmit
    }
  }
  </script>
  
  <style>
  
  </style>