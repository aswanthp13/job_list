// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,vue}',
//     './components/**/*.{js,ts,vue}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'custom-blue': '#1e40af',
//       },
//       spacing: {
//         '72': '18rem',
//         '84': '21rem',
//       },
//       boxShadow: {
//         'card': '0 4px 6px rgba(0, 0, 0, 0.1)',
//       },
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//       },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,vue}',
    './components/**/*.{js,ts,vue}',
    './layouts/**/*.{js,ts,vue}',   // Ensure layouts are included if you're using them
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1e40af',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}


