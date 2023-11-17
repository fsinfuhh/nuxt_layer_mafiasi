// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: "node-cluster",
  },
  telemetry: false,
  modules: [
    "@nuxt/ui",
  ],
  devtools: {enabled: true},
  colorMode: {
    classSuffix: "",
  },
  runtimeConfig: {
    public: {
      openidIssuer: "https://identity.mafiasi.de/realms/mafiasi",
      openidClientId: "dev-client"
    }
  },
  vite: {
    optimizeDeps: {
      include: ["oidc-client-ts"],
    }
  }
})

declare module 'nuxt/schema' {
  interface RuntimeConfig {
  }

  interface PublicRuntimeConfig {
    openidIssuer: string,
    openidClientId: string,
  }
}
