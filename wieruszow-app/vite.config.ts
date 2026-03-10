import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/app/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/*', 'images/**/*'],
      manifest: {
        id: '/app/',
        name: 'Przewodnik',
        short_name: 'Przewodnik',
        description: 'Przewodnik turystyczny po powiecie wieruszowskim',
        theme_color: '#0D6B3F',
        background_color: '#F7F8FA',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/app/',
        start_url: '/app/',
        icons: [
          {
            src: '/app/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/app/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/app/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/[abc]\.tile\.openstreetmap\.org\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'map-tiles',
              expiration: {
                maxEntries: 500,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
            },
          },
        ],
      },
    }),
  ],
});
