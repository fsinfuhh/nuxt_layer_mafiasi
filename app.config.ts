export default defineAppConfig({
  mafiasi: {}
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    mafiasi?: {}
  }
}
