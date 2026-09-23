import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Permitir hosts de túnel (localtunnel / ngrok / cloudflared / etc.)
    allowedHosts: [
      '.loca.lt',
      '.ngrok.io',
      '.ngrok-free.app',
      '.trycloudflare.com',
      '.lhr.life',
      '.localhost.run',
    ],
  },
});
