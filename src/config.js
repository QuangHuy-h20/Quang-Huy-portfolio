module.exports = {

    socialMedia: [
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
            name: 'Work',
            url: '/#projects'
        },
        {
            name: 'Contact',
            url: '/#contact'
        },
    ],
    color: {
        darkGray: '#36393B',
        dark: '#202224',
    },
    srConfig: (delay = 200, viewFactor = 0.25) => ({
        origin: 'bottom',
        distance: '20px',
        duration: 500,
        delay,
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        scale: 1,
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        mobile: true,
        reset: false,
        useDelay: 'always',
        viewFactor,
        viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    }),
}