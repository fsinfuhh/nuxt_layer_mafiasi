import type {RouteLocationRaw} from "vue-router";

export default defineAppConfig({
  mafiasi: {
    openidScopes: "openid",
    loginRedirectUrl: "/",
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    mafiasi?: {
      openidScopes?: string,
      loginRedirectUrl?: RouteLocationRaw,
    }
  }
}
