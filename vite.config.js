import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
 base: "hotel/",
 plugins: [react(), splitVendorChunkPlugin()],
 build: {
  rollupOptions: {
    output: {
      manualChunks(id) {
        // creating a chunk to react routes deps. Reducing the vendor chunk size
        if (

          id.includes('firebase')
        ) {
          return '@firebase';
        }

      },
    },
  },
},
});
