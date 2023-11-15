<script lang="ts" setup>
definePageMeta({
  name: "protected-page",
  middleware: ["authenticated"]
})
</script>

<template>
  <h1>This page can only be viewed when you are authenticated</h1>
</template>
