<script lang="ts" setup>
import {useTimeout} from "@vueuse/core";

definePageMeta({
  name: "login-callback",
  layout: "notice",
})

const router = useRouter();
const userManager = useUserManager();
const appConfig = useAppConfig();

const isProcessingTimedOut = useTimeout(3500)

onMounted(async () => {
  await userManager.signinRedirectCallback(router.currentRoute.value.fullPath);

  // redirect the user based on a stored parameter or fallback to a default value
  const storedNext = window.sessionStorage.getItem("login-next");
  if (storedNext != null) {
    window.sessionStorage.removeItem("login-next");
    await navigateTo({path: storedNext}, {replace: true});
  } else {
    await navigateTo(appConfig.mafiasi.loginRedirectUrl, {replace: true});
  }
});
</script>

<template>
  <UCard>
    <template
      v-if="isProcessingTimedOut"
      #header
    >
      <h1 class="text-2xl">
        The response from Mafiasi-Identity is being processed...
      </h1>
    </template>

    <template #default>
      <h1
        v-if="!isProcessingTimedOut"
        class="text-2xl"
      >
        The response from Mafiasi-Identity is being processed...
      </h1>

      <p
        v-if="isProcessingTimedOut"
        class="mb-4"
      >
        This has taken an unusual amount of time.<br>
        If you suspect that something has gone wrong, click the button below
        to retry the login process.
      </p>
      <UButton
        v-if="isProcessingTimedOut"
        :to="{ name: 'login' }"
        size="lg"
      >
        Retry
      </UButton>
    </template>
  </UCard>
</template>
