<template>
  <core-app>
    <v-toolbar app class="elevation-6" height="60px" scroll-off-screen :scroll-threshold="25">
      <logo />
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-select
          style="width: 100px !important;"
          :items="languages"
          @input="navigate"
          item-text="title"
          item-value="route"
          :value="language"
        />
      </v-toolbar-items>
    </v-toolbar>

    <v-content fill-height>
      <nuxt />
    </v-content>
  </core-app>
</template>

<script>
export default {
  name: "LayoutHome",

  data() {
    return {
      languages: [
        { title: "English", route: "/" },
        { title: "Spanish", route: "/es" }
      ],
      language: "/"
    };
  },

  mounted() {
    if (this.$route.name === "es") {
      this.language = "/es";
    }
  },

  methods: {
    navigate(event) {
      this.$router.push(event);
    }
  }
};
</script>


<style>
</style>
