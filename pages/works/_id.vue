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
        <v-layout data-aos="fade-up" align-center :class="{ 'py-5': $vuetify.breakpoint.xs }">
          <v-flex
            xs12
            text-xs-center
            :class="{ 'ml-5': !$vuetify.breakpoint.xs, 'ml-2': $vuetify.breakpoint.xs }"
          >
            <h1 class="text-uppercase display-2 font-weight-bold white--text">{{ work.client.name }}</h1>
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

    <v-container v-if="work.urlWork && work.urlWork.lenght>0">
      <v-layout row wrap>
        <v-flex xs12 text-xs-center my-5>
          <h3 class="display-1 mb-2">{{work.about}}</h3>
          <p class="subheading font-weight-thin">{{ work.story }}</p>
          <p class="subheading font-weight-thin">{{ work.story2 }}</p>
          <v-btn
            class="pulse"
            depressed
            color="grey darken-3"
            target="_blank"
            dark
            :href="work.urlWork"
          >CHECK IT OUT</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- livet sections logo&views -->
    <div id="livetsection1">
      <v-layout row wrap align-center justify-center class="mt-15">
        <v-flex data-aos="fade-right" xs12 md6 class="text-xs-center mt-10">
          <v-img
            absolute
            width="50%"
            class="mx-auto"
            :src="work.urlImages.logoLivet"
            :alt="`${work.client.logoLivet} `"
          ></v-img>

          <h1 class="livettext">{{work.livetAboutTitle}}</h1>

          <h2 class="livettext" style="margin-top:25px;">{{work.livetAboutSub}}</h2>
        </v-flex>

        <v-flex md6 xs12>
          <v-img
            data-aos="fade-left"
            :src="work.urlImages.viewsMobile"
            :alt="`${work.client.viewsMobile} `"
          ></v-img>
        </v-flex>
      </v-layout>
    </div>

    <!-- livet sections text-->

    <div id="livetsection2" style=" margin-top: 150px; ">
      <v-container>
        <v-layout text-xs-center align-center row wrap>
          <v-flex xs12 md3 class="text-xs-center">
            <v-img data-aos="fade-up" :src="work.urlImages.apple" :alt="`${work.client.apple} `"></v-img>
          </v-flex>

          <v-flex xs12 md3 class="text-xs-center">
            <v-img
              data-aos="fade-up"
              :src="work.urlImages.android"
              :alt="`${work.client.android} `"
            ></v-img>
          </v-flex>

          <v-flex xs12 md6 text-xs-center>
            <h1 class="livettext">{{work.livetAboutTitle1}}</h1>
            <div>
              <h4 class="livettext">{{work.livetAboutTexta}}</h4>
              <h4 class="livettext">{{work.livetAboutTextb}}</h4>
              <h4 class="livettext">{{work.livetAboutTextc}}</h4>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <!--  -->
    <div class="py-5" v-if="work.urlImages.notebook">
      <v-container data-aos="zoom-in">
        <v-layout row wrap>
          <v-flex xs12>
            <v-img :src="work.urlImages.notebook" :alt="`${work.client.name} logoLivet size image`"></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <div v-if="work.urlImages.imgMobile && work.urlImages.imgMobile.length > 0">
      <v-container grid-list-xl>
        <v-layout row class="grid-tech">
          <v-flex justify-self-center v-for="item in work.urlImages.imgMobile" :key="item">
            <img data-aos="flip-right" :src="item" alt />
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <div class="py-5" v-if="work.urlImages.desktop && work.urlImages.desktop.length > 0">
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
    <!-- 
    <v-img
      v-if="work.urlImages.home"
      :src="work.urlImages.home"
      :alt="`${work.client.name} home image`"
    ></v-img>
    -->

    <v-container>
      <v-layout row wrap my-5>
        <v-flex xs12 text-xs-center>
          <h4 class="display-1 font-weight-thin">TECHNOLOGIES USED IN THIS PROJECT</h4>
          <div class="line grey darken-4 mx-auto my-3"></div>
          <!-- SEPARADOR  -->
        </v-flex>
        <v-layout xs12 md12 row class="grid-tech">
          <v-flex justify-self-center v-for="item in work.urlImages.technologies" :key="item">
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