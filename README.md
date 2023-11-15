# Nuxt Layer for Mafiasi Apps

This repository contains a [NuxtJS Layer](https://nuxt.com/docs/getting-started/layers) that is used by Mafiasi applications to not replicate common logic between them.


## Content

This layout contains the following content:

- **Login with Mafiasi**

  OpenID login using Mafiasi-Identity as a provider is configured and appropriate routes are set up.

  See the test app contained in [.playground](./.playground) on how it can be used but roughly the following is available:

  - Pages that are only available to authenticated users via the [`authenticated`](./middleware/authenticated.ts) [middleware](https://nuxt.com/docs/guide/directory-structure/middleware).
    ```vue
    <script setup>
      definePageMeta({
        middleware: ["authenticated"]
      })
    </script>
    ```

  - *Login*, *Logout* as well as a *Login-Required* pages to which you can redirect to trigger the authentication related functionality
    ```vue
    <NuxtLink :to="{ name: 'login' }">Login</NuxtLink>
    <NuxtLink :to="{ name: 'login', query: { next: '/bla' } }">Login and visit /bla afterwards</NuxtLink>
    <NuxtLink :to="{ name: 'logout' }">Logout</NuxtLink>
    ```

  - Configuration is done via [AppConfig](https://nuxt.com/docs/getting-started/configuration#app-configuration) for static things and via [RuntimeConfig](https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens) for dynamic things.
    The relevant schemas are defined in [app.config.ts](./app.config.ts) and at the bottom of [nuxt.config.ts](./nuxt.config.ts)

- **Nuxt-UI**

  The layer pulls in [NuxtUI](https://ui.nuxt.com/) which is a UI library built on NuxtJS.
  This includes [tailwindcss](https://tailwindcss.com/) support (via [Nuxt Tailwind](https://tailwindcss.nuxtjs.org/))
  color mode (via [NuxtColorMode](https://color-mode.nuxtjs.org/)).


## Using the Layer

The layer is published on GitHub which can be added as a dependency:

```shell
pnpm add https://github.com/fsinfuhh/nuxt_layer_mafiasi.git
```

To then use it, add it to the `extends` key in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  extends: ["nuxt_layer_mafiasi"]
})
```


## Development Setup

Developing the nuxt layer works exactly the same as any normal nuxt project.

Running `pnpm run dev` will prepare and boot the `.playground` directory, which imports the layer and serves it.

Checkout the [nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
