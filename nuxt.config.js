const page = {
  title: 'Devlights works',
  description:
    "We pride ourselves on being able to provide brands with holistic solutions, no matter what stage they're at. Here's what we've accomplished with our clients.",
  safe_img: `/safe_image.png`,
  safe_img_alt: 'Image of devlights works',
  favicon: `/devlights-icon.png`
};

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: `${page.title}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      {
        hid: 'description',
        name: 'description',
        content: `${page.description}`
      },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: `${page.title}` },
      { name: 'twitter:description', content: `${page.description}` },
      { name: 'twitter:image', content: `${page.safe_img}` },
      { name: 'twitter:image:alt', content: `${page.safe_img_alt}` },

      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: `${page.title}` },
      { property: 'og:url', content: `${FRONT_URL}` },
      { property: 'og:image', content: `${page.safe_img}` },
      { property: 'og:site_name', content: `${page.title}` },
      { property: 'og:description', content: `${page.description}` }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `${page.favicon}` },
      { rel: 'icon', type: 'image/x-icon', href: '/devlights-icon.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/style/app.styl'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-components', '~/plugins/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'cookie-universal-nuxt'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^vuetify/],

    babel: {
      plugins: [
        [
          'transform-imports',
          {
            vuetify: {
              transform: 'vuetify/es5/components/${member}',
              preventFullImport: true
            }
          }
        ]
      ]
    }
  }
};
