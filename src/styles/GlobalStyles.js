import { createGlobalStyle } from 'styled-components';

import TransitionStyles from './transitionStyles';
// import PrismStyles from './PrismStyles';

import fonts from './fonts'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
    ${fonts};
    ${variables};

    html,
    body,
    div,
    span,
    h1,
    h2,
    h3,
    h4, 
    h5,
    h6,
    p,
    a,
    img,
    i,
    ol,
    ul,
    li,
    form,
    label,
    article,
    footer,
    header,
    menu,
    nav,
    section,
    time{
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    html {
      box-sizing: border-box;
      width: 100%;
    }
    
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    ul,ol{
      list-style:none;
    }
    a{
      font-size: var(--fs-xs);
      color: var(--white);
      text-decoration:none;
      transition: all 0.2s var(--transition);
    }

      /*https://css-tricks.com/custom-scrollbars-in-webkit/ */
      /* Custom scrollbar */

      html {
      scrollbar-width: thin;
      scrollbar-color: var(--orange) var(--dark-gray);
      }
      body::-webkit-scrollbar {
        width: 12px;
      }
      body::-webkit-scrollbar-track {
        background: var(--dark-gray);
      }
      body::-webkit-scrollbar-thumb {
        background-color: var(--orange);
        border: 3px solid var(--dark-gray);
        border-radius: 10px;
      }

      body {
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        background: var(--dark);
        font-family: var(--font-poppins);
        line-height: 1.3;
      }
      #root {
        min-height: 100vh;
        display: grid;
        grid-template-rows: 1fr auto;
        grid-template-columns: 100%;
      }
    
      main {
        margin: 0 auto;
        width: 100%;
        max-width: 1600px;
        min-height: 100vh;
        padding: 200px 150px;
    
        @media (max-width: 1080px) {
          padding: 200px 100px;
        }
        @media (max-width: 768px) {
          padding: 150px 50px;
        }
        @media (max-width: 480px) {
          padding: 125px 25px;
        }
      }
      
      ${TransitionStyles};
`;

export default GlobalStyle;
