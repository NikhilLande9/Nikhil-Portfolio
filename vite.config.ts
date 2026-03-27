import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    // If we're building for GitHub Pages, use the repo name. 
    // If building for Netlify or local dev, use the root.
    base: mode === 'gh-pages' ? '/Nikhil-Portfolio/' : '/',
    
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});