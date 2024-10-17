import { defineConfig } from 'vite'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), './locales/**'),
    })
  ],
})
