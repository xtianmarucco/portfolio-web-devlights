<template>
  <div>
    <v-container>
      <v-layout wrap row>
        <v-flex
          xs12
          text-xs-center
          :class="{ 'my-5': $vuetify.breakpoint.smAndUp, 'my-3': $vuetify.breakpoint.xs }"
        >
          <h1 class="display-1 mb-3">WORK</h1>
          <p
            class="subheading font-weight-thin"
          >We pride ourselves on being able to provide brands with holistic solutions, no matter what stage they’re at. Here’s what we've accomplished with our clients.</p>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid pa-0 class="container-works">
      <v-layout row wrap>
        <v-flex v-for="work in works" :key="work._id" xs12 sm6>
          <nuxt-link :to="`/details?id=${work._id}`" style="text-decoration: none;">
            <v-card flat tile>
              <v-img
                :src="work.client.urlImage"
                :aspect-ratio="16/9"
                class="img-client"
                :alt="`${work.client.name} image`"
              >
                <v-container fill-height>
                  <v-layout align-end>
                    <v-flex
                      xs12
                      :class="{ 'ml-5': !$vuetify.breakpoint.xs, 'ml-2': $vuetify.breakpoint.xs }"
                    >
                      <h3 class="text-uppercase headline white--text">{{ work.client.name }}</h3>
                      <div class="line white my-2"></div>
                      <p
                        class="text-uppercase body-2 font-weight-thin white--text"
                      >{{ work.services.toString() }}</p>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
            </v-card>
          </nuxt-link>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "PageWorks",

  layout: "home",

  mounted() {
    this.getWorks();
  },

  methods: {
    ...mapActions(["getWorks"])
  },

  computed: {
    ...mapState(["works"])
  }
};
</script>

<style lang="scss">
.container-works {
  background-color: #cccccc;

  .img-client {
    .v-responsive__content,
    .v-image__image {
      transition: 0.5s;
    }
    &:hover .v-image__image {
      transform: scale(1.2);
    }

    .v-responsive__content {
      background-color: rgba(0, 0, 0, 0.25);
    }
    &:hover .v-responsive__content {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>