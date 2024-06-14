/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cust-black": "#1C1C1C",
        "cust-grey": "#9F9F9F",
        "cust-grey-lighter": "#D8D8D8",
        "cust-grey-lightest": "#F6F6F6",
        "cust-orange": "#DD761C",
        "cust-orange-lighter": "#FFDAB9",
        "cust-redish": "#C73659",
        "cust-redish-lighter": "#FCF0F5",
        "cust-blue": "#0B93DF",
        "cust-blue-lighter": "#E7F5FC",
        "cust-green": "#14BA6D",
        "cust-green-lighter": "#EEFAF2"
      }
    },
  },
  plugins: [],
}