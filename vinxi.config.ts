import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',  // This is the default, but you can explicitly specify it
    rollupOptions: {
      // Any additional Rollup options you might need
    },
  },
})
