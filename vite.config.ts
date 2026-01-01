import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Production-safe Vite configuration
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    plugins: [react()],

    /**
     * Required when hosting under a subpath
     * Example: https://username.github.io/repo-name/
     */
    base: './',

    /**
     * Optional hardening
     */
    build: {
      sourcemap: false,     // avoid leaking source in production
      outDir: 'dist',
      emptyOutDir: true
    },

    // Define process.env.API_KEY for the Assistant component
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});