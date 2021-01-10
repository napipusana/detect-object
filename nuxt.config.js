export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'interviewNipa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // '@/assets/styles/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // resolve: {
    //   alias: {
    //     "@nipacloud/nvision": "@nipacloud/nvision/dist/browser/nvision.js"
    //   }
    // }
    extend (config) {
      config.resolve.alias['@nipacloud/nvision'] = "@nipacloud/nvision/dist/browser/nvision.js"
      // config.resolve.alias['~utils'] = path.join(projectSrc, 'utils')
    }
    // config.resolve.alias['@nipacloud/nvision'] = '@nipacloud/nvision/dist/browser/nvision.js'
  }
  // resolve: {
  //   alias: {
  //     "@nipacloud/nvision": "@nipacloud/nvision/dist/browser/nvision.js"
  //   }
  // }
}
