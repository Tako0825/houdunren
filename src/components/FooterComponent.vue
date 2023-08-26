<template>
    <div class="w-full h-52 bg-gray-800 flex flex-col justify-center items-center text-white text-sm">
        <p class="py-1">{{ slogan }}</p>
        <p class="py-1">微信: {{ wechat }} 邮箱: {{ email }}</p>
        <p class="py-1">{{ copyright }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slogan: "后盾人 人人做后盾",
            wechat: "OzoNe80096",
            email: "2060364922@qq.com",
            copyright: "Copyright © houdunren.com All Rights Reserved"
        }
    }
}
</script>

<style>

</style>