module.exports = {
  mode: "jit",
  purge: ["./**/*.html", "./src/**/*.css", "./js/**/*.js"], //要加上 JS 的路徑
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
