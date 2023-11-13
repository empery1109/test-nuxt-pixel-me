<template>
  <div>
    <div>Nuxt module playground!</div>
    <p>ola</p>
  </div>
</template>

<script setup lang="ts">
const $fbPixelMe = usePixelMe()

$fbPixelMe.track('CompleteRegistration')
</script>
