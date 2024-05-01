import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Allow serving files from the specified directories
      allow: [
        'D:/Sem_6/drive-ease-backend/assets/carsImage',
        'D:/Sem_6/AWT/ReactProject/drive-ease/src',
      ],
    },
  },
})
