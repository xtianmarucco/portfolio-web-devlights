<template>
  <core-app>
    <v-toolbar app class="elevation-6" height="60px">
      <logo/>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content fill-height>
      <nuxt/>
    </v-content>
  </core-app>
</template>

<script>
import Logo from "@/components/Logo";
export default {
  name: "LayoutHome",

  components: {
    Logo
  }
};
</script>


<style>
</style>
