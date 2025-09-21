import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/Lesson_16/",
  plugins: [
    tailwindcss(),
  ],
})
