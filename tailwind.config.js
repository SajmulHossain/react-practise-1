/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#04071c',
        'background': '#fbfcf8',
        'primary': '#2633e0',
        'secondary': '#2AED3D',
        'accent': '#9a5ae8',
       },
      backgroundImage: {
        'gradient': 'linear-gradient(225deg, rgba(38,51,224,1) 0%, rgba(42,237,61,1) 100%);'
       }
    },
  plugins: [],
}
}