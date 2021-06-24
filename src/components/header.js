import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { css } from 'styled-components'
import { useScrollDirection, usePrefersReducedMotion } from '@hooks';
import { Menu } from '@components'
import { LogoIcon } from '@components/icons'
import { navLinks } from '@config'
import { loaderDelay } from '@utils'

const StyledHeader = styled.header`
    ${({ theme }) => theme.mixins.flexBetween}    
    height: var(--nav-height);
    padding: 0 50px;
    width:100%;
    position:fixed;
    top:0;
    z-index:99;
    filter: none !important;
    pointer-events: auto !important;
    user-select: auto !important;
    background-color:rgba(32, 34,36, .55)!important;
    backdrop-filter: blur(15px);
    transition: var(--transition);
    
    @media (prefers-reduced-motion: no-preference) {
      ${props =>
    props.scrollDirection === 'up' &&
    !props.scrolledToTop &&
    css`
          height: var(--nav-scroll-height);
          transform: translateY(0px);
          background-color: #202224;
          box-shadow:0px 10px 6px -5px rgb(13 15 19 / 75%);
        `};
  
      ${props =>
    props.scrollDirection === 'down' &&
    !props.scrolledToTop &&
    css`
          height: var(--nav-scroll-height);
          transform: translateY(calc(var(--nav-scroll-height) * -1));
          box-shadow:0 -1px 6px -5px rgb(13 15 19 / 75%);
        `};
    }

    @media screen and (max-width:1100px){
      padding:0 40px;
    }

    @media screen and (max-width:768px){
      padding: 0 20px;
    }

`

const StyledNavbar = styled.nav`
    ${({ theme }) => theme.mixins.flexBetween}    
    width:100%;
    .logo{
      ${({ theme }) => theme.mixins.flexCenter}   
    }
`

const StyledMenu = styled.div`
    ${({ theme }) => theme.mixins.flexCenter}   
    ul{
        ${({ theme }) => theme.mixins.flexBetween}
        li{
            padding: 10px 25px;
            a{
              letter-spacing:.5px;
              font-size: var(--fs-sm);
              font-weight:300;
              &:hover{
                color: var(--light-orange);
              }
            }
        }
    }
    .btn-resume{
      padding: 10px 25px;
      border:1px solid var(--orange);
      border-radius: var(--border-radius);
      margin-left:25px;
      &:hover{
          background: rgba(255, 146, 100,.47);
          color: var(orange);
      }
    }

    @media screen and (max-width:768px){
      display:none;
    }
`

const Header = ({ isHome }) => {

  const [isMounted, setIsMounted] = useState(!isHome);
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const timeout = isHome ? loaderDelay : 0;
  const fade = isHome ? 'fade' : '';
  const fadeDown = isHome ? 'fadedown' : '';


  const Logo = (
    <div className="logo">
      {isHome ? (
        <Link to="/">
          <LogoIcon />
        </Link>
      ) : (
        <Link to="/">
          <LogoIcon />
        </Link>
      )}
    </div>
  );

  const Resume = (
    <a class="btn-resume" target="_blank" href="/quanghuy_resume.pdf">Resume</a>
  );
  
  return (
    <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <StyledNavbar>
        {prefersReducedMotion ? (
          <>
            {Logo}
            <StyledMenu>
              <ul>
                {navLinks &&
                  navLinks.map(({ url, name }, i) => (
                    <li key={i}>
                      <Link to={url}>{name}</Link>
                    </li>
                  ))}
              </ul>
              <div>{Resume}</div>
            </StyledMenu>
            <Menu />
          </>
        ) : (
          <>
            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fade} timeout={timeout}>
                  <>{Logo}</>
                </CSSTransition>
              )}
            </TransitionGroup>

            <StyledMenu>
              <ul>
                <TransitionGroup component={null}>
                  {isMounted &&
                    navLinks &&
                    navLinks.map(({ url, name }, i) => (
                      <CSSTransition key={i} classNames={fadeDown} timeout={timeout}>
                        <li key={i} style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}>
                          <Link to={url}>{name}</Link>
                        </li>
                      </CSSTransition>
                    ))}
                </TransitionGroup>
              </ul>

              <TransitionGroup component={null}>
                {isMounted && (
                  <CSSTransition classNames={fadeDown} timeout={timeout}>
                    <div style={{ transitionDelay: `${isHome ? navLinks.length * 100 : 0}ms` }}>
                      {Resume}
                    </div>
                  </CSSTransition>
                )}
              </TransitionGroup>
            </StyledMenu>
            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fade} timeout={timeout}>
                  <Menu />
                </CSSTransition>
              )}
            </TransitionGroup>
          </>
        )}
      </StyledNavbar>
    </StyledHeader>
  )
}
Header.propTypes = {
  isHome: PropTypes.bool,
};

export default Header
