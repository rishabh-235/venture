/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 5s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-100%)' },
        }
      }  
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

