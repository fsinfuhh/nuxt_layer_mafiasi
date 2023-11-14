export default defineAppConfig({
  mafiasi: {
    openidScopes: "openid"
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    mafiasi?: {
      openidScopes?: string,
    }
  }
}
