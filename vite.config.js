import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-harry', // Matches https://Rutik95.github.io/react-harry,
  plugins: [react(),tailwindcss()],
})
