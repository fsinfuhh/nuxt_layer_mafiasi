<script lang="ts" setup>
definePageMeta({
  name: "login-required",
  layout: "notice",
})

const route = useRoute();
</script>

<template>
  <UCard>
    <template #header>
      <h1 class="text-2xl">
        The page you were trying to visit requires authentication
      </h1>
    </template>

    <template #default>
      <p class="mb-4">
        The page at <i>{{ route.query.next }}</i> you to be logged in to your Mafiasi account.<br>
        You can click the button below to login using your Mafiasi account after which you will be redirected to the
        original page.
      </p>

      <UButton
        :to="{ name: 'login', query: { next: route.query.next } }"
        size="lg"
      >
        Login now
      </UButton>
    </template>
  </UCard>
</template>
