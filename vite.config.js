import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(async ({ command }) => {
  const plugins = [react()]

  if (command === 'serve') {
    try {
      const iris = (await import('vite-plugin-iris')).default
      plugins.unshift(iris())
    } catch {}
  }

  return {
    base: '/Mojo-Coffee-website/',
    plugins,
  }
})