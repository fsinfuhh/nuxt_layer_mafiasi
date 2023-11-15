<script setup lang="ts">
definePageMeta({
  name: "logout",
  layout: "notice",
})

const userManager = useUserManager();

onMounted(async () => {
  if (await userManager.getUser() != null) {
    const redirectUri = new URL(window.location.href);
    redirectUri.pathname = "/";
    redirectUri.hash = "";
    redirectUri.search = "";

    await userManager.signoutRedirect({
      post_logout_redirect_uri: redirectUri.href,
    });
  } else {
    await navigateTo({ path: "/" });
  }
});
</script>

<template>
  <UCard>
    <h1 class="text-2xl">
      You are being logged out...
    </h1>
  </UCard>
</template>
