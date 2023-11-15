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
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      openidIssuer: "https://identity.mafiasi.de/realms/mafiasi",
      openidClientId: "dev-client"
    }
  },
})

declare module 'nuxt/schema' {
  interface RuntimeConfig {}
  interface PublicRuntimeConfig {
    openidIssuer: string,
    openidClientId: string,
  }
}
