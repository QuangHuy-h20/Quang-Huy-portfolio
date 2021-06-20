import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Lottie from 'react-lottie';
import * as character from '@images/lottie/personal-character.json'
import sr from '@utils/sr'
import { usePrefersReducedMotion } from '@hooks'
import { srConfig } from '@config'


const StyledAbout = styled.section`
    .wrapper{
        display:grid;
        grid-template-columns: 3fr 2fr;
        grid-gap: 80px;
    }

`

const StyledContent = styled.div`

    .dribble{
        font-size:var(--fs-md);
        font-style:italic;
        color: var(--pink);
    }

    p:nth-child(2){
        margin: 30px 0;
    }

    ul{
        margin-top:20px;
        display:grid;
        grid-template-columns: 1fr 1fr;

        li{
            font-size:var(--fs-sm);
            color: var(--gray);
            font-weight:300;
            padding:10px 0;
            &:before{
                content: ">";
                margin-right:5px;
                color:var(--light-orange);
            }
        }
    }
`

const StyledImage = styled.div`
    width:300px;
    height:300px;
`

const About = () => {

    const revealContainer = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        sr.reveal(revealContainer.current, srConfig('left'));
    }, []);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: character,
    };


    const skills = ["HTML, CSS/Sass", "Bootstrap/Material-UI", "Javascript (ES6+)", "React", "Styled-components "];

    return (
        <StyledAbout id="about" ref={revealContainer}>
            <h2 className="heading">About me</h2>
            <div className="wrapper">
                <StyledContent>
                    <p>Hi! My name is Pham Quang Huy, and I enjoy building everything on the web. My passion for the web started when I visited <a className="dribble" href="https://dribbble.com/" target="_blank" rel="noreferrer">dribbble
                    </a>  by chance. So I was immensely interested when I saw a lot of beautiful products on the website.</p>
                    <p>Since then, I never stop my effort to answer the question I always asked myself in previous times: “How to create a website?”.  So far, I think I have pieces of knowledge about web development.
                    </p>
                    <p>Here are some technologies I have been working with:</p>
                    <ul>
                        {skills.map(item => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </StyledContent>
                <StyledImage>
                    <Lottie options={defaultOptions} height={300} width={300} />

                </StyledImage>
            </div>
        </StyledAbout>
    )
}

export default About
