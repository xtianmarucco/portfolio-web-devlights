<template>
  <core-app>
    <v-toolbar app class="elevation-6" height="60px" scroll-off-screen :scroll-threshold="25">
      <logo/>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content fill-height>
      <nuxt/>
    </v-content>
  </core-app>
</template>

<script>
export default {
  name: "LayoutHome"
};
</script>


<style>
</style>
