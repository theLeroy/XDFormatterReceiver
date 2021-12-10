const plugin = require('tailwindcss/plugin')
module.exports = {
    mode: 'jit',
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            textColor: {
                primary: '#1E63AD',
                primaryHover: '#1A5DA5',
                secondary: '#0060D1',
                secondaryHover: '#006CED',
                tertiary: '#8DB0D5',
                tertiaryHover: '#8BABCC',
                quaternary: '#F5F9FFFF',
                quaternaryHover: '#EBF3FF',
                orange: '#FFBA00',
                orangeHover: '#F2B102',
                error: '#F05377',
                white: '#FFFFFF',
                black: '#123155',
            },
        },
    },
    plugins: [
        plugin(function ({ addVariant, e }) {
            addVariant('orange', ({ modifySelectors, separator }) => {
                modifySelectors(({ className }) => {
                    return `.orange .${e(`orange${separator}${className}`)}`
                })
            })
        }),
    ],
}