<template>
    <div class="bg-gray-700 h-screen flex justify-center items-center select-none">
      <div class="container box-content w-64 md:w-96 h-96 md:h-80 p-4 bg-gray-200 flex flex-col md:flex-row items-center justify-center rounded-lg transform scale-110">
        <div class="w-full md:w-2/3 flex flex-col justify-center items-center">
          <h1 class="py-4">用户注册</h1>
          <form action="" class="w-full text-gray-500">
            <InputText name="用户名"/>
            <InputPassword name="密码"/>
            <InputPassword name="确认密码"/>
          </form>
          <div class="my-4 w-full flex justify-evenly">
            <InputSubmit name="注册"/>
          </div>
          <div class="absolute bottom-1 text-xs font-bold text-gray-500">
            <router-link to="/login" class="px-2 hover:text-green-600 transition cursor-pointer">登录账号</router-link>
            <router-link to="/" class="px-2 hover:text-green-600 transition cursor-pointer">返回首页</router-link>
          </div>
        </div>
        <div class="w-1/3 justify-center hidden md:flex">
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