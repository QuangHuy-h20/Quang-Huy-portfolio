import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import { srConfig, email } from '@config'
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
const StyledContact = styled.section`
    max-width:700px;
    text-align:center;
    .last{
        font-size:40px;
        text-align:center;
        &:before{
            display:none;
        }
    }
    p{
            font-size: var(--fs-lg);
    }

    a{
        display:inline-block;
        margin-top:70px;
        ${({ theme }) => theme.mixins.contactButton};
    }
`
const Contact = () => {

    const revealContainer = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        sr.reveal(revealContainer.current, srConfig('bottom'));
    }, []);

    return (
        <StyledContact id="contact" ref={revealContainer}>
            <h2 className="heading last">Get In Touch</h2>
            <p>Although I'm currently a fourth-year student, to grow to the following engineering level, I'm now looking for new experiences. So, if you are interested in my information or have a question, let's say hi, and I'll get back to you soon with my best.</p>
            <a href={`mailto:${email}`}>Say hello</a>
        </StyledContact>
    )
}

export default Contact
