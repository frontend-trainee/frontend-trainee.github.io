import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/micro-frontend-base/',
  plugins: [react()],
  resolve: {
    alias: {
      '@/': './src',
      '@/config': './src/config',
      '@/components': './src/components',
      '@/styles': './src/styles',
      '@/utils': './src/utils',
      '@/common': './src/common',
      '@/assets': './src/assets',
      '@/pages': './src/pages',
      '@/routes': './src/routes',
      '@/layouts': './src/layouts',
      '@/hooks': './src/hooks',
      '@/store': './src/store',
    },
  },
});
