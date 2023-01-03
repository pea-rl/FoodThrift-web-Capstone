// import firebase from '@nuxtjs/firebase'
// import 'firebase'
// import firebase from '@nuxtjs/firebase'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'FoodThrift',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
      { rel: 'script', href: '/js/boostrap.min.js' },
      { rel: 'script', href: '/js/jquery.min.js' },
      { rel: 'script', href: '/js/bs-init.js' },
      { rel: 'script', href: '/js/theme.js' }
    ],
    script: [{
      type: 'text/javascript',
      src: '~/js/boostrap.min.js'
    }],
    build: {
      extractCSS: true
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/css/bootstrap.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/store/firebase.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // firebase config
    [
      '@nuxtjs/firebase',
      {
      // eslint-disable-next-line no-undef
        config: {
          apiKey: 'AIzaSyC62rsKg8c3KhBRbcPutMhOW2OiSMp1qao',
          authDomain: 'foodthrift-4ad15.firebaseapp.com',
          projectId: 'foodthrift-4ad15',
          storageBucket: 'foodthrift-4ad15.appspot.com',
          messagingSenderId: '665845356427',
          appId: '1:665845356427:web:706e2173a4659e830cc18e',
          measurementId: 'G-H2VV3HMJSB'
        },
        services: {
          firestore: true,
          storage: true,
          database: true
        }
      }
    ]
  ],
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

// Initialize the Firebase app.
// firebase.(process.env.firebase)
