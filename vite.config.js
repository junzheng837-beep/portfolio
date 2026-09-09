import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 相对路径打包，同时兼容 GitHub Pages 子路径和 Cloudflare Pages 根路径
  base: './',
})
