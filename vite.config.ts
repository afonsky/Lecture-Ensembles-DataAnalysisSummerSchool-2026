import { defineConfig } from 'vite'

// Works around a Slidev regression (slidevjs/slidev#2616, since v52.15.2):
// <img src="/public-asset.png"> in slide bodies is compiled into a Vite
// import, which then fails the slidev:slide-import-guard fs.allow check.
export default defineConfig({
  server: { fs: { strict: false } },
})
