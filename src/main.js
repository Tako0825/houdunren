import Vue from 'vue'
import App from '@/App.vue'
import RegisterPlugins from "@/plugins/index"
import { router } from '@/plugins/router'

import "tailwindcss/tailwind.css"

async function bootstrap() {
  RegisterPlugins()
  const app = new Vue({
    router,
    render: h => h(App),
  })
  app.$mount('#app')
}
bootstrap()