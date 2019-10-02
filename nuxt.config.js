let FRONT_URL = "";

if (process.env.DEPLOY_ENV === "GH_PAGES") {
  FRONT_URL = "https://work.devlights.com";
} else {
  FRONT_URL = "http://localhost:3000";
}

const page = {
  title: "Devlights works",
  short_name: "DL: Works",
  description:
    "We pride ourselves on being able to provide brands with holistic solutions, no matter what stage they're at. Here's what we've accomplished with our clients.",
  safe_img: `${FRONT_URL}/safe_image.png`,
  safe_img_alt: "Image of devlights works",
  favicon: `${FRONT_URL}/icon.png`
};

module.exports = {
  env: {
    FRONT_URL
  },

  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: `${page.title}`,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      {
        hid: "description",
        name: "description",
        content: `${page.description}`
      },

      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: `${page.title}` },
      { name: "twitter:description", content: `${page.description}` },
      { name: "twitter:image", content: `${page.safe_img}` },
      { name: "twitter:image:alt", content: `${page.safe_img_alt}` },

      { property: "og:type", content: "website" },
      { property: "og:title", content: `${page.title}` },
      { property: "og:image", content: `${page.safe_img}` },
      { property: "og:site_name", content: `${page.title}` },
      { property: "og:description", content: `${page.description}` }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: `${page.favicon}` },
      // {
      //   rel: 'stylesheet',
      //   href:
      //     'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp'
      // },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900|Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/style/app.styl", "aos/dist/aos.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/vue-components",
    "~/plugins/vuetify",
    { ssr: false, src: "~/plugins/vuelidate" },
    { ssr: false, src: "~/plugins/smooth-scroll" }, //that how yo force nuxt to install the galery
    { ssr: false, src: "~/plugins/aos" } //that how yo force nuxt to install the galery
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "cookie-universal-nuxt"

  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: FRONT_URL
  },

  manifest: {
    name: page.title,
    short_name: page.short_name,
    lang: "en-US",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#518bc0"
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^vuetify/],

    babel: {
      plugins: [
        [
          "transform-imports",
          {
            vuetify: {
              transform: "vuetify/es5/components/${member}",
              preventFullImport: true
            }
          }
        ]
      ]
    }
  }
};
