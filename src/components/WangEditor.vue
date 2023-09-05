<template>
  <div class="overflow-hidden shadow-md w-full z-50">
    <Toolbar
        class="border-b-2"
        :editor="editor"
        :defaultConfig="toolbarConfig"
        :mode="mode"
    />
    <Editor
        class="h-96 overflow-y-hidden"
        v-model="html"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="onCreated"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

export default Vue.extend({
    components: { Editor, Toolbar },
    data() {
        return {
            editor: null,
            html: null,
            toolbarConfig: { },
            editorConfig: { placeholder: '请输入内容...' },
            mode: 'default', // or 'simple'
        }
    },
    methods: {
        onCreated(editor) {
            this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
        },
    },
    beforeDestroy() {
        const editor = this.editor
        if (editor == null) return
        editor.destroy() // 组件销毁时，及时销毁编辑器
    }
})
</script>

<style>
    @import url("@wangeditor/editor/dist/css/style.css");
    /* 全局标题样式 */
    h1 {
        font-size: 32px;
        font-weight: bold;
        color: #333;
    }

    h2 {
        font-size: 28px;
        font-weight: bold;
        color: #555;
    }

    h3 {
        font-size: 24px;
        font-weight: bold;
        color: #777;
    }

    h4 {
        font-size: 20px;
        font-weight: bold;
        color: #999;
    }

    h5 {
        font-size: 16px;
        font-weight: bold;
        color: #aaa;
    }

    h6 {
        font-size: 14px;
        font-weight: bold;
        color: #ccc;
    }
</style>