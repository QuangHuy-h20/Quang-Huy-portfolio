import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Icon } from '@components/icons/'
import { social } from '@config'
import { loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledSocial = styled.ul`
${({ theme }) => theme.mixins.flexCenter} 
    flex-direction:column;
    width: 40px;
    position: fixed;
    top: 34%;
    left:85px;
    
    li{
        width: 25px;
        padding: 15px 0;
        transition: var(--transition);
        &:hover{
            transform: translateY(-5px);
        }
    }
    svg{
        width:22px;
        height:22px;
    }

    @media screen and (max-width:1400px){
        left:40px;
    }
    @media screen and (max-width:1200px){
        top:26%;
    }

    @media screen and (max-width:768px){
        display:none;
    }
`

const Social = ({ isHome }) => {
    const [isMounted, setIsMounted] = useState(!isHome);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (!isHome || prefersReducedMotion) {
            return;
        }
        const timeout = setTimeout(() => setIsMounted(true), loaderDelay);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <StyledSocial>
            {prefersReducedMotion ? (
                <>
                    {social && social.map(({ name, url }, index) => (
                        <li key={index}>
                            <a href={url} target="_blank" rel="noreferrer">
                                <Icon name={name} />
                            </a>
                        </li>
                    ))}
                </>
            ) : (
                <TransitionGroup component={null}>
                    {isMounted &&
                        social &&
                        social.map(({ name, url }, index) => (
                            <CSSTransition classNames={isHome ? 'fadeup' : ''} timeout={isHome ? loaderDelay : 0}>
                                <li key={index}>
                                    <a href={url} target="_blank" rel="noreferrer">
                                        <Icon name={name} />
                                    </a>
                                </li>
                            </CSSTransition>
                        ))}
                </TransitionGroup>
            )}
        </StyledSocial>
    )
}

export default Social;
