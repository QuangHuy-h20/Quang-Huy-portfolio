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

    section{
      margin: 0 auto;
      max-width:1300px;
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
      transition: var(--transition);
    }
    h1,h2,h3,h4,h4,h6,p, span{
      color:#fff;
      font-weight:300;
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

      html,
      body {
        scroll-behavior: smooth;
      }

      body {
        margin: 0px;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        background: var(--dark);
        font-family: var(--font-poppins);
        line-height: 1.34;
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;

        &.hidden {
          overflow: hidden;
        }
    
        &.blur {
          overflow: hidden;
    
          header {
            background-color: transparent;
          }
    
          #content > * {
            filter: blur(5px) brightness(0.7);
            transition: var(--transition);
            pointer-events: none;
            user-select: none;
          }
        }
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
        &.fill {
          padding: 0 150px;
          @media (max-width: 1080px) {
            padding: 0 125px;
          }
          @media (max-width: 768px) {
            padding: 0 50px;
          }
          @media (max-width: 480px) {
            padding: 0 25px;
          }
        }
        section {
          margin: 0 auto;
          padding: 100px 0;
          max-width: 1000px;
      
          @media (max-width: 768px) {
            padding: 80px 0;
          }
      
          @media (max-width: 480px) {
            padding: 60px 0;
          }
        }
        .heading{
          display:block;
          position:relative;
          margin-bottom:80px;
          font-size: var(--fs-heading);
          &:before{
              content:"";
              position:absolute;
              bottom:-20%;
              left:0;
              width:300px;
              height:2px;
              background:#EF9974;
          }
      }
      }
      
      ${TransitionStyles};
`;

export default GlobalStyle;
