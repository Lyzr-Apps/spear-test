import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: true,
    port: 3333,
    strictPort: true,
    allowedHosts: true,
    hmr: {
      port: 3333
    }
  }
})
