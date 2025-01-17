import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Set the port number here
    host: 'localhost' // Optional: ensures the server is bound to localhost
  }
});
