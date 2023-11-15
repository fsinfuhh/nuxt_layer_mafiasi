<script lang="ts" setup>
definePageMeta({
  name: "login-callback",
})

const router = useRouter();
const userManager = useUserManager();
const appConfig = useAppConfig();

onMounted(async () => {
  await userManager.signinRedirectCallback(router.currentRoute.value.fullPath);

  // redirect the user based on a stored parameter or fallback to a default value
  const storedNext = window.sessionStorage.getItem("login-next");
  if (storedNext != null) {
    await navigateTo({path: storedNext}, { replace: true });

  } else {
    await navigateTo(appConfig.mafiasi.loginRedirectUrl, { replace: true });
  }
});
</script>

<template>
  <h1>You are being logged in...</h1>
</template>
