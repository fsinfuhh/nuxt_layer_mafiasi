<script lang="ts" setup>
definePageMeta({
  name: "login-required"
})

const route = useRoute();
const loginQuery = computed(() => {
  if (route.query["next"] != null) {
    return { "next": route.query.next }
  } else {
    return {}
  }
})
</script>

<template>
  <div>
    <h1>The page you were trying to visit requires authentication</h1>
    <NuxtLink :to="{ name: 'login', query: loginQuery }">
      <button>Login now</button>
    </NuxtLink>
  </div>
</template>
