import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
 base: "hotel/",
 plugins: [react(), splitVendorChunkPlugin()],
 preview: {
  port: 8080,
  strictPort: true,
 },
 server: {
  port: 8080,
  strictPort: true,
  host: true,
  origin: "http://0.0.0.0:8080",
 },
});
