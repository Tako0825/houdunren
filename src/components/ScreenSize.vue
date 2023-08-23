<template>
  <div class="sm:block root text-white fixed bottom-0 right-0">
    <span class="sm:hidden">mobile</span>
    <span class="sm:block md:hidden font-bold hidden">sm</span>
    <span class="sm:hidden md:block lg:hidden font-bold hidden">md</span>
    <span class="lg:block xl:hidden font-bold hidden">lg</span>
    <span class="xl:block 2xl:hidden font-bold hidden">xl</span>
    <span class="2xl:block font-bold hidden">2xl</span>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .root {
    text-shadow: 0 0 4px #000;
  }
</style>