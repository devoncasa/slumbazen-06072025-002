import { defineConfig } from 'vite';
export default defineConfig({server:{allowedHosts:['terminal.local']},build:{rollupOptions:{output:{manualChunks:{content:['./content.ts'],vendor:['react','react-dom','react-router-dom'],i18n:['i18next','react-i18next']}}}}});
