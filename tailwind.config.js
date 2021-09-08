module.exports = {
    mode: "jit", //加在這裡
    purge: ["./**/*.html", "./src/**/*.css"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            // ringWidth: ["active"], //加在這裡
        },
    },
    plugins: [],
};
