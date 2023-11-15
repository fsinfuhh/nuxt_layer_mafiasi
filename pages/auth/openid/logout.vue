<script setup lang="ts">
definePageMeta({
  name: "logout",
})

const router = useRouter();
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
    await router.push({path: "/"});
  }
});
</script>

<template>
  <h1>You are being logged out...</h1>
</template>
