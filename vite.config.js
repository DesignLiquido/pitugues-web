import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import process from 'process';

export default defineConfig(({ mode }) => {
  const isLibrary = mode === 'library';
  
  return {
    plugins: [react()],
  resolve: {
    alias: {
      '@api': path.resolve(__dirname, './api'),
    }
  },
  define: {
    global: 'window',
    'process.env': {} // ou você pode definir variáveis de ambiente aqui
  },
  optimizeDeps: {
    include: ['process']
  },
  // Força o vite a incluir o polyfill no bundle
  build: isLibrary ? {
    lib: {
      entry: path.resolve(__dirname, 'src/pitugues-browser.js'),
      name: 'PituguesBrowser',
      fileName: 'pitugues-browser',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {}
      }
    }
  } : {
    rollupOptions: {
      plugins: [
        {
          name: 'process-polyfill',
          resolveId(id) {
            if (id === 'process') return id;
            return null;
          },
          load(id) {
            if (id === 'process') {
              return 'export default ' + JSON.stringify(process);
            }
            return null;
          }
        }
      ]
    }
  }
  };
});
