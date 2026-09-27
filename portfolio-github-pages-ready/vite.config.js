import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },
})
