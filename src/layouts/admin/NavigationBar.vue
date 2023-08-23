<template>
  <div>
    <h1 class="text-gray-50 mb-8">{{ slogan }}</h1>
    <ul 
        v-for="(item,index) in linkList"
        :key="index"
        class="py-4"
    >
        <h1 class="font-bold text-gray-300 text-sm">{{ item.title }}</h1>
        <li v-for="(item,index) in item.options" :key="index">
            <router-link
                :to="item.path"
                class="block w-full text-gray-50 text-xs px-2 py-3 my-2 rounded-md bg-gray-700 hover:bg-green-500 transition duration-200"
            >
                {{ item.name }}
            </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
import linkList from "@/layouts/Admin/linkList.js"
export default {
  data() {
      return {
          slogan: "后盾人, 人人做后盾",
          linkList: linkList()
      }
  }
}
</script>

<style>

</style>