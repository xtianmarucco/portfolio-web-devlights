<template>
  <nuxt-link to="/" class="d-flex">
    <img :src="`${url}/logo-devlights.png`" alt="logo devlights" height="28px">
  </nuxt-link>
</template>

<script>
export default {
  data() {
    return {
      url: ""
    };
  },
  mounted() {
    this.url = `${window.location.origin}`;
  }
};
</script>

<style lang="scss" scoped>
</style>