import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'restaurants.html',
      },
    }
  }
})
