// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', 'nuxt-icon', "@nuxt/image"],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css','~/assets/css/tailwind.css'],
  alias:{
    "@":'/components',
  },

})