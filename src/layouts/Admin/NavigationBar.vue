<template>
  <div class="w-full h-full p-4">
    <!-- 顶部标语 -->
    <header class="mb-8 text-gray-50">
        <application-one theme="outline" size="16" class="transform scale-125"/>
        <span class="whitespace-nowrap px-2">{{ slogan }}</span>
    </header>
    <!-- admin 路由导航 -->
    <dl 
        v-for="(item,index) in admin"
        :key="index"
        class="py-4"
    >
        <dt class="font-bold text-gray-300 text-sm">
            <section>
                <component v-bind:is="item.meta.icon" theme="outline" size="16"></component>
                <span class="px-2">{{ item.meta.title }}</span>
            </section>
        </dt>
        <dd v-for="(jtem,index) in item.children" :key="index">
            <router-link
                :to="{'name':jtem.name}"
                class="block w-full text-gray-50 text-xs pl-6 py-3 my-2 rounded-md bg-gray-700 hover:bg-green-500 transition duration-200"
                :class="{ 'bg-green-500': (jtem.name == $route.name) }"
            >
                <section class="relative">
                    <right theme="outline" size="14" v-if="jtem.name == $route.name" class="absolute -left-4"/>
                    <span>{{ jtem.meta.title }}</span>
                </section>
            </router-link>
        </dd>
    </dl>
    <!-- error 路由导航 -->
    <dl class="py-4">
        <dt class="font-bold text-gray-300 text-sm">
            <section>
                <component v-bind:is="error.meta.icon" theme="outline" size="16"></component>
                <span class="px-2">{{ error.meta.title }}</span>
            </section>
        </dt>
        <dd v-for="(item,index) in error.children" :key="index">
            <router-link
                :to="{'name':item.name}"
                target="_blank"
                class="block w-full text-gray-50 text-xs pl-6 py-3 my-2 rounded-md bg-gray-700 hover:bg-green-500 transition duration-200"
            >
                {{ item.meta.title }}
            </router-link>
        </dd>
    </dl>
  </div>
</template>

<script>
import admin from "@/routes/admin.js"
import error from "@/routes/error.js"
import { ApplicationOne, Right } from "@icon-park/vue";
export default {
    components: {
        ApplicationOne, Right
    },
    data() {
        return {
            admin,
            error,
            slogan: process.env.VUE_APP_SLOGAN,
        }
    }
}
</script>

<style>

</style>