const { default: daisyui } = require('daisyui');

module.exports = {
    content: ['./index.html', './src/**/*.{js, jsx}'],
    theme: { extend: {}},
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                recycle: {
                    primary: '#10b981',
                    'primary-content': '#ffffff',
                    secondary: '#F59E0B',
                    'secondary-content': '#000000'
                },
            },
            'light',
            'dark',
        ]
    }
}