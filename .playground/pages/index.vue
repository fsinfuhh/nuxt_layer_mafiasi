<script lang="ts" setup>
const userManager = useUserManager();

const user = await userManager.getUser();
const isAuthenticated = computed(() => user != null);
</script>

<template>
  <p>Auth Status: {{ isAuthenticated ? 'logged in' : 'not authenticated' }}</p>
  <p v-if="isAuthenticated">User: {{ user }}</p>
  <button class="p-1 mr-2 bg-gray-700 text-white">
    <NuxtLink :to="{ name: 'login' }">Login</NuxtLink>
  </button>
  <button class="p-1 bg-gray-700 text-white">
    <NuxtLink :to="{ name: 'logout' }">Logout</NuxtLink>
  </button>

  <NuxtLink :to="{ name: 'protected-page' }">Visit protected page</NuxtLink>
</template>
