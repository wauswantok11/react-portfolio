import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base :"/",
  plugins: [react()],
  // preview: {
  //   post : 8080,
  //   strictPort: true,
  // },
  server :{
    port: 9090,
    // strictPort: true,
    // host: true,
    // origin: "http://127.0.0.1:8080"
  },
})
