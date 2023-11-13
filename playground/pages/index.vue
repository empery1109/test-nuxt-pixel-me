<template>
  <div>
    <div>Nuxt module playground!</div>
    <NuxtLink to="/article">article</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const $fbPixelMe = usePixelMe()

$fbPixelMe.track('Lead')
</script>
