/*
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 
 module.exports = {
  content: [
    "./node_modules/flowbite-react/**/
    //*.js",
  //  "./pages/**/*.{ts,tsx}",
  //  "./public/**/*.html",
 // ],
  //plugins: [
  //  require("flowbite/plugin")
  //],
 // theme: {},
//}; 

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
