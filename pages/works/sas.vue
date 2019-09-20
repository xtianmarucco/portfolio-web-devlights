<template>
  <div v-if="work" :style="work.styles">
    <v-toolbar
      app
      height="80px"
      flat
      :color="!colorToolbar? 'transparent' : 'white'"
      :class="{
        'elevation-6': colorToolbar,
        'elevation-0': !colorToolbar,
      }"
      scroll-off-screen
      :scroll-threshold="25"
      to="/https://www.devlights.com/"
    >
      <logo />
      <v-spacer></v-spacer>
      <v-btn to="/">
        <v-icon>arrow_left</v-icon>PORTFOLIO
      </v-btn>
    </v-toolbar>
    <v-img
      v-if="work.client.urlImage"
      :src="work.client.urlImage"
      :aspect-ratio="16/9"
      class="img-client"
      :alt="`${work.client.name} image`"
    >
      <v-container fill-height class="scroll-y">
        <v-layout
          data-aos="fade-up"
          justify-end
          row
          fill-height
          :class="{ 'py-5': $vuetify.breakpoint.xs }"
        >
          <v-flex
            md8
            xs12
            text-xs-center
            :class="{ 'ml-5': !$vuetify.breakpoint.xs, 'ml-2': $vuetify.breakpoint.xs }"
          >
            <h1
              class="text-uppercase display-2 font-weight-bold white--text"
            >{{ work.client.name3 }}</h1>
            <div v-if="work" class="line white my-3 mx-auto"></div>
            <p
              class="text-uppercase title font-weight-medium white--text"
            >{{ work.services.toString() }}</p>

            <v-layout row wrap width="100%" justify-center>
              <v-btn fab light absolute id="scroll-down">
                <i class="material-icons" light-primary>arrow_downward</i>
              </v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
        <v-layout
          data-aos="fade-up"
          justify-end
          row
          fill-height
          :class="{ 'py-5': $vuetify.breakpoint.xs }"
        >
          <v-flex
            md8
            xs12
            text-xs-center
            :class="{ 'ml-5': !$vuetify.breakpoint.xs, 'ml-2': $vuetify.breakpoint.xs }"
          >
            <h1
              class="text-uppercase display-2 font-weight-bold white--text"
            >{{ work.client.name3 }}</h1>
            <div v-if="work" class="line white my-3 mx-auto"></div>
            <p
              class="text-uppercase title font-weight-medium white--text"
            >{{ work.services.toString() }}</p>

            <v-layout row wrap width="100%" justify-center>
              <v-btn fab light absolute id="scroll-down">
                <i class="material-icons" light-primary>arrow_downward</i>
              </v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>

    <!-- livet sections text-->

    <!--  -->

    <v-container>
      <v-layout row wrap my-5>
        <v-flex xs12 md6 text-xs-center>
          <h4 class="display-1 font-weight-thin">TECHNOLOGIES USED IN THIS PROJECT</h4>
          <div class="line grey darken-4 mx-auto my-3"></div>
          <!-- SEPARADOR  -->
        </v-flex>
        <v-layout xs12 md12 row class="grid-tech">
          <v-flex
            style="width:200px;"
            justify-self-center
            v-for="item in work.urlImages.technologies"
            :key="item"
          >
            <img data-aos="fade-up" :src="item" alt />
          </v-flex>
        </v-layout>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout row wrap>
        <v-flex xs12 text-xs-center>
          <v-btn dark @click="drawer = !drawer">LET'S WORK TOGETHER</v-btn>
        </v-flex>

        <v-container>
          <v-layout row wrap width="100%" right>
            <v-btn fab dark color="red" id="btnScrollToTop" href="#top">
              <i class="material-icons" light-primary>arrow_upward</i>
            </v-btn>
          </v-layout>
        </v-container>

        <v-navigation-drawer v-model="drawer" app fixed temporary width="560px" right>
          <v-container>
            <v-layout row wrap width="100%">
              <v-flex xs12>
                <v-spacer></v-spacer>
                <v-icon right id="close-icon" @click="drawer = !drawer" large mr-0>close</v-icon>
              </v-flex>

              <br />
              <v-flex xs12 text-xs-center align-center>
                <v-form ref="form">
                  <v-text-field v-model="form.name" label="Name" required outline></v-text-field>

                  <v-text-field v-model="form.email" label="Email" required outline></v-text-field>

                  <v-textarea v-model="form.message" label="Message" required outline></v-textarea>

                  <v-btn color="primary" :disabled="$v.$invalid">send message</v-btn>
                </v-form>
              </v-flex>
            </v-layout>
          </v-container>

          <!-- <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          </v-form>-->
        </v-navigation-drawer>
      </v-layout>
    </v-container>
  </div>
</template>



    


<script>
// const btnScrollToTop = document.querySelector("#btnScrollToTop");

// btnScrollToTop.addEventListener("click", function() {
//   window.scrollTo(0, 0);
// });

import { mapGetters, mapActions } from "vuex";
import { required, email } from "vuelidate/lib/validators";
export default {
  layout: "empty",

  name: "WorkDetail",

  data() {
    return {
      colorToolbar: null,
      drawer: false,
      form: {
        name: "",
        message: "",
        email: ""
      }
    };
  },

  validations: {
    form: {
      name: { required },
      email: { required, email },
      message: { required }
    }
  },

  async mounted() {
    try {
      window.onscroll = this.handleScroll;
      const _id = parseInt(this.$route.params.id);
      await this.getWork({ _id });
    } catch (error) {
      this.$router.push("/");
    }
  },

  beforeDestroy() {
    window.onscroll = null;
  },

  computed: {
    work() {
      return this.$store.getters.getWork(parseInt(this.$route.params.id));
    }
  },

  methods: {
    ...mapActions(["getWork"]),

    handleScroll() {
      this.colorToolbar = document.documentElement.scrollTop > 60;
    }
  }
};
</script>

<style lang="scss">
.img-client {
  .v-responsive__content {
    // background-color: rgba(0, 0, 0, 0.25);
  }
}

.grid-tech {
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

// btn animation
@keyframes grow {
  0% {
    box-shadow: 0 0 0 0 rgba(red, 0.3), 0 0 0 1em rgba(red, 0.3);
  }

  100% {
    box-shadow: 0 0 0 1em rgba(red, 0.3), 0 0 0 1em rgba(red, 0.3);
  }
}

#btnScrollToTop {
  animation: grow 1.2s infinite;
}

@keyframes growb {
  0% {
    box-shadow: 0 0 0 0 rgba(white, 0.3), 0 0 0 1em rgba(white, 0.3);
  }

  100% {
    box-shadow: 0 0 0 1em rgba(white, 0.3), 0 0 0 1em rgba(white, 0.3);
  }
}

#scroll-down {
  animation: growb 1.2s infinite;
}

// @-webkit-keyframes pulse {
//   0% {
//     -webkit-box-shadow: 0 0 0 0 rgba(69, 75, 153, 0.575);
//   }
//   70% {
//     -webkit-box-shadow: 0 0 0 10px rgba(70, 64, 149, 0.52);
//   }
//   100% {
//     -webkit-box-shadow: 8 8 8 8 rgba(68, 96, 149, 0.472);
//   }
// }
// @keyframes pulse {
//   0% {
//     -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
//     box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
//   }
//   70% {
//     -moz-box-shadow: 0 0 0 10px rgba(46, 59, 173, 0.561);
//     box-shadow: 0 0 0 10px rgba(83, 101, 143, 0.541);
//   }
//   100% {
//     -moz-box-shadow: 0 0 0 0 rgba(44, 87, 204, 0.513);
//     box-shadow: 0 0 0 0 rgba(100, 108, 185, 0.554);
//   }
// }

h1 {
  text-shadow: 3px 5px 2px #474747;
  color: #ffffff;
}

#close-icon {
  margin-left: 90%;
  margin-top: 15px;
  margin-bottom: 15px;
}
// #arrow-down{
// margin-top: -100PX;
//   margin-bottom: -200px;

// }

// rubber band animation

.p {
  font-size: 17px;
  line-height: 25px;
}

h4 {
  line-height: 25px;
}

.livettext {
  color: #ffffff;
}
</style>