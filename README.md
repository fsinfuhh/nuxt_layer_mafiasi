# Nuxt Layer for Mafiasi Apps

This repository contains a [NuxtJS Layer](https://nuxt.com/docs/getting-started/layers) that is used by Mafiasi applications to not replicate common logic between them.

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
