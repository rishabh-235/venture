/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/html/utils/withMT";
export default withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      animation:{
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframe:{
        'infinite-scroll':{
          from:{transform:'translateX(0)'},
          to:{transform:'translateX(-100%)'},
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
});

