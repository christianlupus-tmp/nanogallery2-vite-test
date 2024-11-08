import { defineConfig } from 'vite';

// vite.config.js
export default defineConfig({
    // config options
    build: {
      rollupOptions: {
        input: {
          main: './src/main.js',
        },
      },
        lib: {
            entry: './src/main.js',
            name: 'main-ng2',
            fileName: 'main-ng2'
        },
        outDir: 'static/js',
    },
    publicDir: false,
  })
