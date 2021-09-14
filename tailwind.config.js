module.exports = {
  mode: "jit",
  purge: ["./**/*.html", "./src/**/*.css", "./js/**/*.js"], 
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), //加在這裡
  ],
};
