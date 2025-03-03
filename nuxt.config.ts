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

  plugins: ['~/plugins/router.js'], // Register the router plugin

  colorMode: {
    preference: 'light', // Default to light mode
    fallback: 'light', // Fallback in case of invalid settings
    classSuffix: '', // No suffix for class names (can be 'light' or 'dark')
  },

  compatibilityDate: '2025-03-03',
})
