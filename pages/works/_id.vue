<template>
  <div v-if="work" :style="work.styles" style>
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
      <v-btn round to="/">
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
      <v-container fill-height class="scroll-y" style="postion:absolute;">
        <v-layout
          align-center
          justify-end
          fill-heigh
          xs12
          md8
          md6
          data-aos="fade-up"
          :class="{ 'py-5': $vuetify.breakpoint.xs }"
        >
          <v-flex
            text-xs-center
            :class="{ 'ml-5': !$vuetify.breakpoint.xs, 'ml-2': $vuetify.breakpoint.xs }"
          >
            <h1 class="text-uppercase display-2 font-weight-bold white--text">{{ work.client.name }}</h1>
            <div v-if="work" class="line white my-3 mx-auto"></div>
            <p
              class="text-uppercase title font-weight-medium white--text"
            >{{ work.services.toString() }}</p>

            <v-layout row wrap justify-center>
              <v-btn fab light absolute id="scroll-down">
                <i class="material-icons" light-primary>arrow_downward</i>
              </v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>

    <v-container id="chk-out">
      <v-layout row wrap>
        <v-flex xs12 text-xs-center my-5>
          <v-btn
            round
            class="pulse"
            depressed
            color="#FF9800"
            target="_blank"
            dark
            :href="work.urlWork"
          >CHECK IT OUT</v-btn>
        </v-flex>
      </v-layout>
    </v-container>

    <!--  ch section -->
    <div class="py-5" v-if="work.urlImages.notebook">
      <v-container data-aos="zoom-in" class="grid-tech">
        <v-layout ml3 mr-3 mt-5 row wrap justify-self-center text-xs-center>
          <v-flex md12 xs12 justify-self-center text-xs-center>
            <v-layout row wrap>
              <v-flex md6 xs12 justify-self-center>
                <img :src="work.urlImages.clapper" />
                <h3 mt-5 justify-self-center>{{work.client.story}}</h3>
              </v-flex>

              <v-flex md6 xs12 justify-self-center>
                <img :src="work.urlImages.camera" />
                <h3 mt-5 justify-self-center>{{work.client.story2}}</h3>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container grid-list-xs>
        <v-flex data-aos="fade-left" md12 xs12>
          <v-img
            style="heigth:250px;"
            align-center
            justify-self-center
            :src="work.urlImages.notebook"
            alt
          />
        </v-flex>
      </v-container>

      <div v-if="work.urlImages.imgMobile && work.urlImages.imgMobile.length > 0">
        <v-container grid-list-xl>
          <v-layout row wrap ml-2 mr-2 class="grid-tech">
            <v-flex justify-self-center v-for="item in work.urlImages.imgMobile" :key="item">
              <img data-aos="flip-right" :src="item" alt />

              <v-img
                :src="imgDesktop"
                class="mx-2"
                :alt="`${work.client.name} desktop size image - ${indexImgDesktop}`"
              ></v-img>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </div>

    <!-- livet sections logo&views -->
    <div>
      <div style="position:relative;" id="livetsection1">
        <v-layout row wrap align-center justify-center class="mt-15">
          <v-flex
            style="margin-top:-350;"
            data-aos="fade-right"
            xs12
            md6
            class="text-xs-center mt-10"
          >
            <v-img
              absolute
              width="50%"
              class="mx-auto"
              :src="work.urlImages.logoLivet"
              :alt="`${work.client.logoLivet} `"
            ></v-img>

            <h1 class="livettext">{{work.client.livetAboutTitle}}</h1>

            <h2 class="livettext" style="margin-top:25px;">{{work.client.livetAboutSub}}</h2>
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

      <div id="livetsection2" style="position:relative; margin-bottom:-200px;">
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

            <v-flex xs12 md6 text-xs-center mb-5>
              <h1 class="livettext">{{work.livetAboutTitle1}}</h1>
              <div>
                <img style="transform:scale(.8); height:10%;" :src="work.urlImages.bone" />
                <h3 class="livettext">{{work.client.livetAboutTexta}}</h3>"
                <img style="transform:scale(.8); height:10%;" :src="work.urlImages.dog" />
                <h3 class="livettext">{{work.client.livetAboutTextb}}</h3>
                <img style="transform:scale(.8); height:10%;" :src="work.urlImages.mice" />
                <h3 class="livettext">{{work.client.livetAboutTextc}}</h3>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </div>

    <!-- box section-->

    <div>
      <v-container style="margin-top:-250px;">
        <v-layout row wrap>
          <v-flex data-aos="fade-right" md6 xs12 align-center justify-self-center>
            <v-img style="transform:scale(.8);" :src="work.urlImages.boxLogo" />
            <v-flex ml-5 mr-5>
              <h2 style="padding-top:25px;" text-xs-center>{{ work.client.txtBox1 }}</h2>
              <h2 style="padding-top:25px" text-xs-center>{{ work.client.txtBox2 }}</h2>
              <h2 style="padding-top:25px" text-xs-center>{{ work.client.txtBox3 }}</h2>
              <h2 style="padding-top:25px" text-xs-center>{{ work.client.txtBox4 }}</h2>
            </v-flex>
            <v-layout justify-center row wrap mt-5 ml-5 mr-5>
              <v-flex md3 xs4 align-center>
                <v-img :src="work.urlImages.download1" alt />
              </v-flex>

              <v-flex ml-5 md3 xs4 align-center>
                <v-img :src="work.urlImages.download2" alt />
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex data-aos="fade-left" md6 xs12>
            <v-img
              style="heigth:250px;"
              align-center
              justify-self-center
              :src="work.urlImages.boxMobile"
              alt
            />
          </v-flex>
        </v-layout>
        <v-container mb-5>
          <v-layout row wrap style="margin-top: 15%;">
            <v-flex data-aos="fade-right" md6 xs12>
              <v-img :src="work.urlImages.boxViews1" />
            </v-flex>

            <v-flex data-aos="fade-left" md6 xs12>
              <v-img :src="work.urlImages.boxViews2" />
            </v-flex>
          </v-layout>
        </v-container>
      </v-container>
    </div>

    <!-- ceo section  -->
    <div style="position:relative;" id="ceo-section">
      <v-container style="margin-top:400px;">
        <v-layout row wrap style="margin-top: 15%;">
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

      <v-container style="margin-top:20%;">
        <v-layout row wrap align-center justify-center>
          <v-flex xs12 md10 align-center justify-center>
            <v-layout row wrap>
              <v-flex md4 xs12 align-center justify-self-center class="text-xs-center">
                <h2 text-xs-center>{{ work.client.txtCeo1 }}</h2>
                <v-img style="transform:scale(.6);" :src="work.urlImages.ceoImg1" alt />
              </v-flex>

              <v-flex md4 xs12 align-center justify-self-center class="text-xs-center">
                <h2 pl-5 pr-5 text-xs-center>{{ work.client.txtCeo2 }}</h2>
                <v-img style="transform:scale(.6);" :src="work.urlImages.ceoImg2" alt />
              </v-flex>

              <v-flex md4 xs12 align-center justify-self-center class="text-xs-center">
                <h2 text-xs-center>{{ work.client.txtCeo3 }}</h2>
                <v-img style="transform:scale(.6);" :src="work.urlImages.ceoImg3" alt />
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <!-- sas mobile  -->

    <div id="sas-section" v-if="work.urlImages.mobileSas && work.urlImages.mobileSas.length> 0">
      <v-container l>
        <v-layout row wrap>
          <v-flex>
            <v-img></v-img>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container grid-list-xl style="margin-top:-350px;">
        <v-layout row wrap>
          <v-flex v-for="item in work.urlImages.mobileSas" :key="item">
            <img :src="item" alt />
          </v-flex>

          <v-flex
            v-if="work.client"
            md6
            xs12
            align-center
            justify-self-center
            class="text-xs-center"
          >
            <v-flex>
              <img :src="work.urlImages.logoSas" alt />
            </v-flex>

            <v-icon large text-xs-center color="#009A00">computer</v-icon>

            <h2 text-xs-center>Do all your paperwork and formalities from home</h2>

            <p text-xs-center>{{ work.client.tra1 }}</p>

            <v-icon large text-xs-center color="#009A00">supervised_user_circle</v-icon>
            <h2 text-xs-center>More benefits for users</h2>
            <p text-xs-center>{{ work.client.tra2 }}</p>

            <v-icon large text-xs-center color="#009A00">info</v-icon>
            <h2 text-xs-center>Important information for civil entities just a click away</h2>
            <p>{{ work.client.tra3 }}</p>

            <v-icon large text-xs-center color="#009A00">thumb_up</v-icon>
            <h2 text-xs-center>Useful information</h2>
            <p text-xs-center>{{ work.client.tra3 }}</p>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <!-- ocio section  -->

    <div id="ocio-section">
      <v-container grid-list-xl>
        <v-layout row wrap>
          <v-flex data-aos="fade-right" class="text-xs-center">
            <v-img style="transform: scale(0.8)" :src="work.urlImages.ocioShots" alt />
            <h3 style="padding-top:25px" text-xs-center>{{ work.client.txtOcio4 }}</h3>
            <v-container>
              <v-layout mt-5 row wrap>
                <v-img style="transform:scale(.5);" :src="work.urlImages.ocioDownload1" alt />

                <v-img style="transform:scale(.5);" :src="work.urlImages.ocioDownload2" alt />
              </v-layout>
            </v-container>
          </v-flex>

          <v-flex
            data-aos="fade-left"
            md6
            xs12
            align-center
            justify-self-center
            class="text-xs-center"
          >
            <v-flex>
              <img style="transform:scale(.8);" :src="work.urlImages.ocioLogo" alt />
            </v-flex>
            <v-flex>
              <v-flex>
                <img style="transform:scale(.8); height:10%;" :src="work.urlImages.location" />
                <h3 style="padding-top:-500px;" text-xs-center>{{ work.client.txtOcio1 }}</h3>
              </v-flex>

              <img style="transform:scale(.8);" :src="work.urlImages.five" alt />
              <h3 style="padding-top:25px" text-xs-center>{{ work.client.txtOcio2}}</h3>
              <img style="transform:scale(.8); padding-top:25px;" :src="work.urlImages.glass" alt />
              <h3 style="padding-top:25px" text-xs-center>{{ work.client.txtOcio3 }}</h3>
            </v-flex>
          </v-flex>
          <v-container>
            <v-layout row wrap>
              <v-flex data-aos="fade-right" md6 xs12>
                <v-img :src="work.urlImages.ocioScreen1" />
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex data-aos="fade-left" md6 xs12>
                <v-img :src="work.urlImages.ocioScreen2" />
              </v-flex>
            </v-layout>
          </v-container>
        </v-layout>
      </v-container>
    </div>

    <div>
      <v-container id="technologies-container">
        <v-layout row wrap xs12 text-xs-center my-5>
          <v-flex xs12 text-xs-center mt-5>
            <h2 mt-5>TECHNOLOGIES USED IN THIS PROJECT</h2>
            <div class="line grey darken-4 mx-auto my-3"></div>
          </v-flex>
          <v-layout row wrap ml-2 mr-2 class="grid-tech">
            <v-flex
              md12
              xs12
              justify-self-center
              v-for="item in work.urlImages.technologies"
              :key="item"
            >
              <img
                align-center
                justify-self-center
                height="200px"
                width="300px"
                style="transform:scale(.8);"
                data-aos="fade-up"
                :src="item"
                alt
              />
            </v-flex>
          </v-layout>
        </v-layout>
      </v-container>
    </div>

    <div>
      <v-container>
        <v-layout row wrap>
          <v-container grid-list-md>
            <v-flex class="fixed-btn" xs12>
              <v-btn round color="#FF9800" @click="drawer = !drawer">LET'S WORK TOGETHER</v-btn>
            </v-flex>
          </v-container>

          <v-layout row wrap>
            <v-flex md6 xs6 text-xs-center>
              <v-btn round dark color="green" id :to="`/works/${work.back}`" nuxt>
                <i class="material-icons" light-primary>keyboard_arrow_left</i>
                prEVIOUS
              </v-btn>
            </v-flex>

            <v-flex md6 xs6 text-xs-center>
              <v-btn round dark color="green" id href :to="`/works/${work.next}`" nuxt>
                NEXT
                <i class="material-icons" light-primary>keyboard_arrow_right</i>
              </v-btn>
            </v-flex>
          </v-layout>

          <v-container>
            <v-layout row wrap width="100%" right>
              <v-btn fab dark color="blue" id="btnScrollToTop" href="#top">
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
                  <v-form @submit.prevent="submitForm" class="form_class">
                    <v-text-field v-model="form.name" label="Name" required outline></v-text-field>

                    <v-text-field v-model="form.email" label="Email" required outline></v-text-field>

                    <v-textarea v-model="form.message" label="Message" required outline></v-textarea>

                    <v-btn type="submit" round color="primary" :disabled="$v.$invalid">send message</v-btn>
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
  </div>
</template>



    


<script>
import { mapGetters, mapActions } from "vuex";
import { required, email } from "vuelidate/lib/validators";
import mailgun from "mailgun.js";

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
      },

      // mailgun settings
      mg: mailgun.client({
        username: "api",
        key: "key-d21cdfd0bcf74daf338705e69fd03bd4"
      })
    };
  },

  validations: {
    form: {
      name: { required },
      email: { required, email },
      message: { required }
    }
  },
  // function :sendMail() {

  // }

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
    },

    // submnitforms function
    submitForm() {}
  }
};
</script>

<style lang="scss">
.grid-tech {
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.fixed-btn {
  width: 800px;
  position: fixed;
  top: 90%;
  margin-left: 3%;
  z-index: 8;
  animation: pulse 1s infinite;
  // position: relative;
}
@keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

// btn animation

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

@media only screen and (max-width: 600px) {
  // #ocio-section {
  //   margin-top: -300px;
  // }

  // // #technologies-container {
  // //   margin-top: 200px;
  // // }
  // // #ceo-section {
  // //   margin-top: -200px;
  // // }

  .grid-tech {
    display: block;
  }

  // // .py-5 {
  // //   margin-top: 200px;
  // // }

  // #ceo-section {
  //   position: absolute;
  // }

  // #chk-out {
  //   margin-bottom: 350px;
  // }

  // // #sas-section {
  // //   margin-top: 200px;
  // // }
}

@media only screen and (min-width: 1200px) {
  // #technologies-container {
  //   margin-top: 450px;
  // }
}
</style>