<template>
    <input type="submit" class="cursor-pointer text-center px-4 py-1 bg-green-600 hover:bg-opacity-80 transition duration-200 text-gray-200 rounded-md" placeholder="de" :value="name">
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