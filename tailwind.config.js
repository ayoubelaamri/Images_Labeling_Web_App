module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        extend: {},
        
        // colors: {
        //     transparent: 'transparent',
        //     current: 'currentColor',
        //     'white': '#ffffff',
        //     'purple': '#3f3cbb',
        //     'midnight': '#121063',
        //     'metal': '#565584',
        //     'tahiti': '#3ab7bf',
        //     'silver': '#ecebff',
        //     'bubble-gum': '#ff77e9',
        //     'bermuda': '#78dcca',
        //     'color1': '#557A95',
        //     'color2': '#7395AE',
        //     'color3': '#B1A296',
        //     'color4': '#379683',
        //     'color5': '#5D5C61',
        //   },

        // fontFamily: {
        //     'sans': ['ui-sans-serif', 'system-ui'],
        //     'serif': ['ui-serif', 'Georgia'],
        //     'mono': ['ui-monospace', 'SFMono-Regular'],
        //     'display': ['Oswald'],
        //     'body': ['"Open Sans"'],
        //   }
    },
    plugins: [
        require('flowbite/plugin'),
    ],
}