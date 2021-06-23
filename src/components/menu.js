import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet';
import { navLinks } from '@config'
import { Link } from 'gatsby'
import { useOnClickOutside } from '@hooks';

const StyledMenu = styled.div`
    display:none;
    @media screen and (max-width:768px){
        display:block;
    }
`

const StyledSidebar = styled.div`
    display:none;
    @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.flexCenter};
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    background: rgba(38,40,41,.85);
    box-shadow: -8px 9px 19px 0 rgba(0, 0, 0, .45);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur( 15px);
    z-index: 8;
    visibility: ${props => (props.open ? 'visible' : 'hidden')};
    transform: translateX(${props => (props.open ? 0 : 100)}vw);
    transition: all .4s var(--easing);
    }

    nav{
        ${({ theme }) => theme.mixins.flexBetween};
        flex-direction:column;
        width:100%;
    }
    a{
        color: var(--orange);
        font-size: clamp(24px,6vw,30px);
    }

    ul{
        flex-direction:column;
        display:flex;
        justify-content: space-evenly;
        align-items:center;
        width:100%;
        margin-bottom:20px;
        li{
            padding: 30px 0;
        }
    }

`

const StyledBurger = styled.button`
    display: flex;
    position:relative;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: var(--orange);
    border-radius: 10px;
    transition: var(--transition);
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

`

const Menu = () => {


    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));

    return (
        <StyledMenu>
            <Helmet>
                <body className={open ? 'blur' : ''} />
            </Helmet>

            <div ref={node}>
                <StyledBurger ref={node} open={open} onClick={() => setOpen(!open)}>
                    <div />
                    <div />
                    <div />
                </StyledBurger>
                <StyledSidebar open={open} setOpen={setOpen} tabIndex={open ? 1 : -1}>
                    <nav ref={node}>
                        {navLinks && (
                            <ul>
                                {navLinks.map(({ url, name }, i) => (
                                    <li key={i}>
                                        <Link to={url} onClick={() => setOpen(false)}>{name}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <a class="btn-resume" target="_blank" href="/quanghuy_resume.pdf">Resume</a>
                    </nav>

                </StyledSidebar>
            </div>
        </StyledMenu>
    )
}

export default Menu;
