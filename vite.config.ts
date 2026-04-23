import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  base: '/vite-project/', // ← change to your repo name, e.g. '/<REPO>/'
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
