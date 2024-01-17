/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //  your color palette here
        themegreen: "#00838d",
      },
    },
  },
  plugins: [
    require("tailwindcss"),

    // quire("tailwindcss-filters"),
    // other PostCSS plugins if needed
  ],
};
