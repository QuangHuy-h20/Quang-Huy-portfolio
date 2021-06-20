import { css } from 'styled-components'

const variables = css`
    :root{
        --white: #fff;
        --dark: #202224;
        --orange: #EF9974;
        --light-orange: #EFD3B1;
        --gray:#6f748e;
        --dark-gray:#36393B;
        --pink: #EA4C89;


        --font-poppins: 'Poppins', -apple-system, system-ui, sans-serif;

        --fs-xxs: 12px;
        --fs-xs: 13px;
        --fs-sm: 14px;
        --fs-md: 16px;
        --fs-lg: 18px;
        --fs-xl: 20px;
        --fs-xxl: 22px;
        --fs-heading: 30px;

        --border-radius:5px;
        --nav-height: 100px;
        --nav-scroll-height: 70px;

        --easing: cubic-bezier(.6,.25,.55,1);
        --transition: all .25s cubic-bezier(.6,.25,.55,1);
    }
`

export default variables;