import { defineConfig } from 'vite';
import VitePWA from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [VitePWA()],
  base: '/Threejs-3D-Portfolio/', // Adjust this to your repository name
});
