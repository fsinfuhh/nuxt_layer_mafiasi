<script setup lang="ts">
definePageMeta({
  name: "login",
})

const route = useRoute();
const userManager = useUserManager();

onMounted(async () => {
  // store next parameter so that login-callback can restore it later
  console.log(route.query);
  if (route.query["next"] != null && typeof route.query["next"] == "string") {
    console.log("setting login-next in storage to", route.query["next"])
    window.sessionStorage.setItem("login-next", route.query["next"]);
  } else {
    window.sessionStorage.removeItem("login-next");
  }

  // redirect the user
  await userManager.signinRedirect({});
});
</script>

<template>
  <h1>You are being redirected to Mafiasi-Identity to log you in...</h1>
</template>
