<template>
    <div class="relative w-full h-96 overflow-hidden">
        <Editor :options="{ language: 'zh-CN' }" class="absolute top-0 left-0 w-full h-full"/>
    </div>
</template>

<script>
import { Editor } from '@toast-ui/vue-editor';
import "@toast-ui/editor/dist/i18n/zh-cn";
export default {
    components: {
        Editor
    }
}
</script>

<style>
    @import url('@toast-ui/editor/dist/toastui-editor.css');
</style>