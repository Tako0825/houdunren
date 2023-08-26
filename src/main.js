import Vue from 'vue'
import App from '@/App.vue'
import RegisterPlugins from "@/plugins/index"
import { router } from '@/plugins/router'

// tailwindcss
import "tailwindcss/tailwind.css"
// icon-park
import "@icon-park/vue/styles/index.css"

// EventBus
Vue.prototype.$bus = new Vue();

async function bootstrap() {
  RegisterPlugins()
  const app = new Vue({
    router,
    render: h => h(App),
  })
  app.$mount('#app')
}
bootstrap()