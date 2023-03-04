import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { remarkCodeHike } from '@code-hike/mdx'
import {theme } from './theme'

// https://vitejs.dev/config/
export default defineConfig(async()=>{
  const mdx=await import("@mdx-js/rollup")
  return {
    optimizeDeps:{
      include:["react/jsx-runtime"]
    },
    plugins: [react(),mdx.default({
      remarkPlugins:[[remarkCodeHike,{theme}]],
    })],
  }
})
