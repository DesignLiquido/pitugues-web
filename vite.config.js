import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import process from 'process';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@api': path.resolve(__dirname, './api'),
      util: 'util/',
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
  build: {
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
});
