<template>
    <input type="text" class="w-full h-10 my-2 rounded-md pl-2 outline-none focus:border-green-600 transform focus:scale-105 transition border-2 focus:text-gray-800" :placeholder="name">
</template>

<script>
export default {
    props: [
        "name"
    ]
}
</script>

<style>

</style>