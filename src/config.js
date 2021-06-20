module.exports = {

    email: 'quanghuy/h20@gmail.com',
    social: [
        {
            name: 'Github',
            url: 'https://github.com/QuangHuy-h20',
        },
        {
            name: 'Linkedin',
            url: 'https://www.linkedin.com/in/quang-huy-h20/',
        },
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/qg.huy0910/',
        },
        {
            name: 'Codepen',
            url: 'https://codepen.io/quanghuy-h20',
        },

        {
            name: 'Instagram',
            url: 'https://www.instagram.com/qghyy/?hl=vi',
        }
    ],

    navLinks: [
        {
            name: 'About',
            url: '/#about'
        },
        {
            name: 'Education',
            url: '/#education'
        },
        {
            name: 'Portfolio',
            url: '/#portfolio'
        },
        {
            name: 'Contact',
            url: '/#contact'
        },
    ],
    color: {
        dark: '#36393B',
        orange: '#EF9974',
    },
    srConfig: (orientation = '', delay = 300, viewFactor = 0.25) => ({
        origin: orientation,
        distance: '30px',
        duration: 500,
        delay,
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        scale: 1,
        easing: 'cubic-bezier(.6,.25,.55,1)',
        mobile: true,
        reset: false,
        useDelay: 'always',
        viewFactor,
        viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    }),
}