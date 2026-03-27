import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/v1/users': {
        target: 'https://ledgermind-user-service.onrender.com/',
        changeOrigin: true,
        secure: false,
      },
      '/api/v1/transactions': {
        target: 'https://ledgermind-transaction-service.onrender.com/',
        changeOrigin: true,
        secure: false,
      },
      '/api/v1/businesses': {
        target: 'https://ledgermind-user-service.onrender.com/',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
