// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   // compatibilityDate: '2024-11-01',
//   // devtools: { enabled: true },
//   modules: ['@nuxtjs/tailwindcss'],
//   css: ['~/assets/css/tailwind.css'],
// })


// nuxt.config.js

// export default defineNuxtConfig({
//   ssr: true,
//   modules: ['@nuxtjs/tailwindcss'],

//   // Make sure this path is correct
//   css: ['@/assets/css/tailwind.css'],

//   compatibilityDate: '2025-03-03'
// })

// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],

  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            customBlue: '#1e40af', // Custom color for your project
          },
          spacing: {
            72: '18rem', // Custom spacing
            84: '21rem',
          },
          boxShadow: {
            custom: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)', // Custom shadow effect
          },
          backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))', // Custom gradient background
          },
        },
      },
    },
  },

  compatibilityDate: '2025-03-03',
})