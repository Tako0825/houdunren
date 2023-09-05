<template>
    <div class="w-32 h-32  my-4">
      <!-- 状态1 - 上传前 -->
      <label for="upload-image" v-if="!fileList.length" @mouseover="labelHover=true" @mouseleave="labelHover=false" class="w-full h-full flex justify-center items-center border-dashed border-2 hover:border-green-400 hover:text-green-400 cursor-pointer rounded-md">
        <add-picture theme="outline" size="28" :fill="labelHover?'#34d399':'#e5e7eb'"/>
        <input type="file" id="upload-image" @change="selectFile($event); uploadFile()" class="hidden">
      </label>
      <!-- 状态2 - 上传中 -->
      <div v-if="fileList.length" class="w-full h-full flex justify-center items-center border-2 border-green-400 rounded-md">
          <loading-four theme="outline" size="24" fill="#34d399" class="loading-animation"/>
      </div>
      <!-- 状态3 - 上传后 -->
    </div>
</template>

<script>
import { AddPicture, LoadingFour } from '@icon-park/vue'
export default {
  components: {
    AddPicture, LoadingFour
  },
  data() {
    return {
      fileList: [],
      labelHover: false
    }
  },
  methods: {
    // 选择图片
    selectFile(event) {
      this.fileList = event.target.files
    },
    // 上传图片
    async uploadFile() {
      if(!this.fileList?.length) {
        return alert("请勿上传空文件！")
      }
      let formData = new FormData()
      formData.append("file", this.fileList[0])
      console.log(formData.get("file"));
      
      await fetch("http://127.0.0.1:3000/api/upload/image",{
        method: "POST",
        body: formData
      }).then(res => {
        // 处理响应
        console.log(res);
        alert("上传成功！");
      }).catch(() => {
        // 处理异常
        this.fileList = []
        this.labelHover = false;
        alert("上传失败！")
      })
    }
  }
}
</script>

<style>
  .loading-animation {
    animation: loading 1s linear infinite; 
  }

  @keyframes loading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>