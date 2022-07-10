import {createApp} from 'vue'
import App from './App.vue'
import {registerMicroApps, start} from "qiankun";

createApp(App).mount('#app')

registerMicroApps([
    {
        name: "vue3-vite",
        container: '#viewport',
        entry: "//localhost:3009/vue3-vite",
        activeRule: "/vue3-vite",
    },
])

start()
