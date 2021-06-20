import React, { useEffect, useRef } from 'react';
import styled from 'styled-components'
import sr from '@utils/sr'
import { usePrefersReducedMotion } from '@hooks'
import { srConfig } from '@config'
import { EducationIcon, Calendar } from '@components/icons'

const StyledEducation = styled.section`
    opacity:1;
    .logo{
        ${({ theme }) => theme.mixins.flexCenter};
        margin-bottom: 30px;
    }
    .timeline{
        display: grid;
        grid-template-columns:1fr max-content 1fr;
        column-gap:60px;
        height:400px;
    }
    .wrapper{
        height:100px;
        width:100%;
        h2{
            font-size: var(--fs-xl);
            margin-bottom: 8px;
        }
        h3{
            color: var(--gray);
            margin-bottom: 6px;
        }
        
        span{
            color: var(--gray);
            margin-left:7px;
        }
    }
    .left{
        text-align:right;
    }
    
    .circle{
        display:inline-block;
        width: 15px;
        height:15px;
        border-radius:50%;
        background:var(--orange);
    }
    .second{
        max-width:300px;
    }
    .line{
        display:block;
        width:3px;
        height:100%;
        background:var(--orange);
        transform: translate(6px, -7px);
    }
`

const Education = () => {

    const revealContainer = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        sr.reveal(revealContainer.current, srConfig('right'));
    }, []);


    return (
        <StyledEducation id="education" ref={revealContainer}>
            <h2 className="heading">Education</h2>
            <div className="logo">
                <EducationIcon />
            </div>
            <div className="timeline">

                <div class="wrapper left">
                    <div>
                        <h2>Software Engineering</h2>
                        <h3>Hutech university</h3>
                        <p> <Calendar /><span>9/2018 - present</span></p>
                    </div>
                </div>
                <div>
                    <div className="circle"></div>
                    <div className="line"></div>
                </div>
                <div></div>
                <div>
                    <div>
                    </div>
                </div>
                <div>
                    <div className="circle"></div>
                    <div className="line"></div>
                </div>
                <div class="wrapper">
                    <h2 className="second">Thinking in programming problems - solving and OOP</h2>
                    <h3>Cybersoft - CyberLearn</h3>
                    <p> <Calendar /><span>08/2020  - 10/2020</span></p>
                </div>
                <div class="wrapper left">
                    <div>
                        <h2>Front-end Foundation</h2>
                        <h3>Cybersoft academy</h3>
                        <p> <Calendar /><span>12/2020  - 7/2021</span></p>
                    </div>
                </div>
                <div>
                    <div className="circle"></div>
                    <div className="line"></div>
                </div>
                <div></div>
            </div>

        </StyledEducation>
    )
}

export default Education
