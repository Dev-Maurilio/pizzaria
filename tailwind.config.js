/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./**/*.js"],
    theme: {
        extend: {
            colors: {
                'brand-red': '#E63946',
                'brand-dark': '#1A1A1A',
                'brand-light': '#F8F9FA',
            },
        },
    },
    plugins: [],
}
