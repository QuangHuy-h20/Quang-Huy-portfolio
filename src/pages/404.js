import * as React from "react"
import { Link } from "gatsby"
import Lottie from 'react-lottie';
import * as astronaut from '@images/lottie/astronaut.json'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '@styles';

const StyledNotFound = styled.main`
  padding-top: 0;
  padding-bottom: 0;
  .notFound{
    ${({ theme }) => theme.mixins.flexBetween}    
    flex-direction:column;
    text-align:center;
    h1{
      margin: 30px 0;
      font-size: clamp(32px, 10vw, 68px);
    }
    h2{
      color: var(--light-orange);
      font-size: clamp(22px, 8vw, 48px);
    }
    .comeback{
      ${({ theme }) => theme.mixins.contactButton};
    }
  }
`

const StyledImage = styled.div`
  width:700px;
  height:500px;
  @media only screen and (max-width:768px){
    width:500px;
  }
  @media only screen and (max-width:500px){
    width:300px;
    height:300px;
  }
`

// markup
const NotFoundPage = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: astronaut,
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledNotFound>
          <div className="notFound">
            <StyledImage>
              <Lottie options={defaultOptions} />
            </StyledImage>
            <h2>404</h2>
            <h1>Oops, look like you found a wrong place!</h1>
            <Link className="comeback" to="/">Comeback to me</Link>
          </div>
        </StyledNotFound>
      </ThemeProvider>
    </>
  )
}

export default NotFoundPage
