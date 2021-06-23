import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import anime from 'animejs';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { LoaderIcon } from '@components/icons'


const StyledLoader = styled.div`
    ${({ theme }) => theme.mixins.flexCenter};
    background:var(--dark);
    z-index:999;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;

    .loaderScreen{
        transition: var(--transition);
        opacity: ${props => (props.isMount ? 1 : 0)};
        svg {
            width: 100%;
            height: 100%;
            display: block;
            margin: 0 auto;
            fill: none;
          }
    }
`

const Loader = ({ isFinish }) => {

    const [isMount, setIsMount] = useState(false);

    const animate = () => {
        const anim = anime.timeline({
            complete: () => isFinish(),
        })
        anim
            .add({
                targets: '#circle',
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutQuad',
                duration: 1500,
                delay: 300,
            })
            .add({
                targets: '#name',
                duration: 500,
                endDelay: 300,
                opacity: 1,
                easing: 'easeInOutQuad'
            })
            .add({
                target: '.loader',
                duration: 500,
                opacity: 0,
                easing: 'easeInOutQuad',
                zIndex:-1,
            })
    }

    useEffect(() => {
        const timeout = setTimeout(() => setIsMount(true), 10);
        animate();
        return () => clearTimeout(timeout);
    }, []);

    return (
        <StyledLoader className="loader" isMount={isMount}>
            <Helmet bodyAttributes={{ class: `hidden` }} />
            <div className="loaderScreen">
                <LoaderIcon />
            </div>
        </StyledLoader>
    )
}
Loader.propTypes = {
    isFinish: PropTypes.func.isRequired,
};

export default Loader
