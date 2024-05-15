/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: '#FF7F36',
                bg: '#F4F4F4',
                black: '#27283A',
                white: '#FFFFFF',
            },
        },
    },
    plugins: [],
}

