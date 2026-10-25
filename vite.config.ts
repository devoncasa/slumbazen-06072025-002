import { defineConfig } from 'vite';
export default defineConfig({build:{rollupOptions:{output:{manualChunks:{vendor:['react','react-dom','react-router-dom'],i18n:['i18next','react-i18next']}}}}});
