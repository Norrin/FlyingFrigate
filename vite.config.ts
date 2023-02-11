import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({
    include: '**/.*.tsx,.jsx',
  })],
  server: {
    port: 3000
  }
})



