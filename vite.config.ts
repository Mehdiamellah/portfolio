import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base './' → chemins relatifs : le build marche à la racine
// (Vercel) et sous-sous-chemin (GitHub Pages /portfolio/) sans config.
export default defineConfig({
  base: './',
  plugins: [react()],
})
