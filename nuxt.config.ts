// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: "node-cluster",
  },
  telemetry: false,
  modules: [
    "@nuxtjs/tailwindcss",
  ],
  devtools: { enabled: true }
})
