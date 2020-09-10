import path from 'path'

module.exports = {
  mode: 'universal',

  /*
   ** Set the server
   */
  server: {
    port: 4000,
    host: 'localhost'
  },

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  pwa: {
    icon: {
      /* icon options */
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/components',
    '@/plugins/icons',
    '@/plugins/flatpikr',
    { src: '@/plugins/vue-trix', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa'
    // Doc: https://github.com/nuxt-community/dotenv-module
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},

  /*
   ** runtime system parameters configuration (this.$config)
   */
  publicRuntimeConfig: {},
  privateRuntimeConfig: {},

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias['@mixins'] = path.resolve(__dirname, 'src', 'mixins')
      config.resolve.alias['@utilities'] = path.resolve(
        __dirname,
        'src',
        'utilities'
      )

      /*

            config.module.rules.push({
        loader: 'html-loader',
        test: /\.svg$/
      })
      const svgRule = config.module.rule('svg')
      svgRule.uses.clear()
      config.module
        .rule('svg')
        .test(/\.svg$/)
        .use('html-loader')
        .loader('html-loader')
        .end()
        */
    }
  }
}
