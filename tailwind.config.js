const { plugin } = require('postcss');
const animate = require('tailwind-animate');
module.exports = {
    darkMode: 'class',
    context: [
        './index.html',
        './src/**/*.{js, jsx}'
    ],
    theme:{
        extend: {
            transitionTimingFunction:{
                'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
            }
        }
    },
    plugins: [animate],
}