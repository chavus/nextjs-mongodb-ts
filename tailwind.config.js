/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{ 
        primary:colors.sky,
        danger:colors.red,
        warning:colors.yellow,
        success:colors.green,
        primaryMain:colors.sky[700],
        primaryMainHover:colors.sky[800],
        primaryMainInDark:colors.sky[500],
        primaryMainHoverInDark:colors.sky[600]
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
