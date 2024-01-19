import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/datastats-react-clone",
  plugins: [react()],
  css: {
    modules: true,
  }
})
