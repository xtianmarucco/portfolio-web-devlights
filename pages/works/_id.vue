<template>
  <div>
    <v-toolbar
      app
      height="64px"
      flat
      :color="!colorToolbar? 'transparent' : 'white'"
      :class="{
        'elevation-6': colorToolbar,
        'elevation-0': !colorToolbar,
      }"
      scroll-off-screen
      :scroll-threshold="25"
    >
      <v-btn icon to="/">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <logo/>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-img
      :src="work.client.urlImage"
      :aspect-ratio="16/9"
      class="img-client"
      :alt="`${work.client.name} image`"
    >
      <v-container fill-height>
        <v-layout align-center :class="{ 'py-5': $vuetify.breakpoint.xs }">
          <v-flex
            xs12
            text-xs-center
            :class="{ 'ml-5': !$vuetify.breakpoint.xs, 'ml-2': $vuetify.breakpoint.xs }"
          >
            <h1 class="text-uppercase display-1 font-weight-thin white--text">{{ work.client.name }}</h1>
            <div class="line white my-2 mx-auto"></div>
            <p
              class="text-uppercase title font-weight-thin white--text"
            >{{ work.services.toString() }}</p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>

    <v-container>
      <v-layout row wrap>
        <v-flex xs12 text-xs-center my-5>
          <h3 class="display-1 mb-2">The Story</h3>
          <p class="subheading font-weight-thin">{{ work.story }}</p>
          <v-btn
            depressed
            color="grey darken-3"
            target="_blank"
            dark
            :href="work.urlWork"
          >CHECK IT OUT</v-btn>
        </v-flex>
      </v-layout>
    </v-container>

    <div class="py-5" style="background-color: #E9E9E9;" v-if="work.urlImages.notebook">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-img :src="work.urlImages.notebook" :alt="`${work.client.name} notebook size image`"></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <div class="py-5" v-if="work.urlImages.mobile && work.urlImages.mobile.length">
      <v-container>
        <v-layout row wrap>
          <v-flex
            xs12
            md6
            v-for="(imgMobile, indexImgMobile) in work.urlImages.mobile"
            :key="imgMobile"
          >
            <v-img
              :src="imgMobile"
              class="mx-2"
              :alt="`${work.client.name} mobile size image - ${indexImgMobile}`"
            ></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <div
      class="py-5"
      style="background-color: #E9E9E9;"
      v-if="work.urlImages.desktop && work.urlImages.desktop.length"
    >
      <v-container>
        <v-layout row wrap>
          <v-flex
            xs12
            md6
            v-for="(imgDesktop, indexImgDesktop) in work.urlImages.desktop"
            :key="imgDesktop"
          >
            <v-img
              :src="imgDesktop"
              class="mx-2"
              :alt="`${work.client.name} desktop size image - ${indexImgDesktop}`"
            ></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <v-img
      v-if="work.urlImages.home"
      :src="work.urlImages.home"
      :alt="`${work.client.name} home image`"
    ></v-img>

    <v-container>
      <v-layout row wrap my-5>
        <v-flex xs12 text-xs-center>
          <h4 class="display-1 font-weight-thin">SERVICES</h4>
          <div class="line grey darken-4 mx-auto my-3"></div>
        </v-flex>
        <v-layout row wrap my-4>
          <v-flex xs12 md4 text-xs-center v-for="service in work.services" :key="service">
            <p class="subheading font-weight-thin ma-0">{{ service }}</p>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  layout: "empty",

  async fetch({ store, params }) {
    await store.dispatch("getWork", { _id: params.id });
  },

  data() {
    return {
      colorToolbar: false
    };
  },

  mounted() {
    window.onscroll = this.handleScroll;
  },

  beforeDestroy() {
    window.onscroll = null;
  },

  computed: {
    work() {
      return this.$store.getters.getWork(this.$route.params.id);
    }
  },

  methods: {
    handleScroll() {
      this.colorToolbar = document.documentElement.scrollTop > 60;
    }
  }
};
</script>

<style lang="scss">
.img-client {
  .v-responsive__content {
    background-color: rgba(0, 0, 0, 0.25);
  }
}
</style>