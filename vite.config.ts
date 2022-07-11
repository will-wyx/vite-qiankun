import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    proxy: {
      '^/project/.*': 'http://localhost:3380',
      '^/project_view/.*': 'http://localhost:3380'
    }
  }
})
