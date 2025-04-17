// vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base:'./',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),  // 用 path 模組做絕對路徑
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/styles/variables.scss" as *;`,
      },
    },
  },
  build: { 
    outDir: 'dist'  // 修正語法錯誤
  }
})
