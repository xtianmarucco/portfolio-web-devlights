<template>
  <nuxt-link :to="to" class="d-flex">
    <img src="/logo-devlights.png" alt="logo devlights" height="28px" />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: "/"
    }
  }
};
</script>

<style lang="scss" scoped>
</style>