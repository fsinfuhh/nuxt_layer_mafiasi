<script lang="ts" setup>
const userManager = useUserManager();

const user = await userManager.getUser();
const isAuthenticated = computed(() => user != null);
</script>

<template>
  <div>
    <p>Auth Status: {{ isAuthenticated ? 'logged in' : 'not authenticated' }}</p>
    <p v-if="isAuthenticated">
      User: {{ user }}
    </p>
    <UButton>
      <NuxtLink :to="{ name: 'login' }">
        Login
      </NuxtLink>
    </UButton>
    <UButton>
      <NuxtLink :to="{ name: 'logout' }">
        Logout
      </NuxtLink>
    </UButton>

    <UButton>
      <NuxtLink :to="{ name: 'protected-page' }">
        Visit protected page
      </NuxtLink>
    </UButton>
  </div>
</template>
