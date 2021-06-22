import React, { useEffect, useRef } from 'react';
import styled from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { usePrefersReducedMotion } from '@hooks'
import { EducationIcon, Calendar, Code } from '@components/icons'
import { srConfig } from '@config'
import sr from '@utils/sr'

const StyledEducation = styled.section`
`

const StyledEduGrid = styled.ul`
    margin-top:100px;
    display: grid;
    grid-template-columns:repeat(3, 1fr);
    grid-gap:30px;   
    @media screen and (max-width:1100px){
        grid-template-columns:repeat(2, 1fr);
    }
    @media screen and (max-width:768px){
        margin:0 auto;
        grid-template-columns:1fr;
        max-width:400px;
    }
    
`

const StyledEduItem = styled.li`
    .inner{
        padding: 28px 30px;
        height:100%;
        background: rgba(38, 40, 41, .85);
        box-shadow: 8px 9px 14px 0 rgba(0, 0,0, .43);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur( 10px);
        border-radius: 5px;
        border: 1px solid rgba(37, 37, 37, .26);
        display:flex;
        justify-content:space-between;
        flex-direction: column;
        cursor:pointer;
        transition: var(--transition);

        &:hover{
            transform: translateY(-10px);
        }
        .top{
            margin-bottom:20px;
        }
     
        .middle{
             h2{
                 font-size: var(--fs-xl);
                 margin-bottom:12px;
             }
             h3,p{
                 color:var(--gray);
                 font-size: 17px;
                 margin-bottom:10px; 
             }
             
         }
         span{
            font-size:var(--fs-sm);
            color:var(--gray);
            svg{
                margin-right:5px;
            }
        }
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
            <StyledEduGrid>
                <StyledEduItem>
                    <div className="inner">
                        <div className="top"><EducationIcon /></div>
                        <div className="middle">
                            <h2>Software Engineering</h2>
                            <h3>Hutech university</h3>
                            <p>GPA: 3.2/4.0</p>
                        </div>
                        <span><Calendar /> 09/2018 - present</span>
                    </div>
                </StyledEduItem>

                <StyledEduItem>
                    <div className="inner">
                        <div className="top"><Code /></div>
                        <div className="middle">
                            <h2>Thinking in programming problems - solving and OOP</h2>
                            <h3>Cybersoft - CyberLearn</h3>
                        </div>
                        <span><Calendar />06/2020  - 07/2020</span>
                    </div>
                </StyledEduItem>

                <StyledEduItem>
                    <div className="inner">
                        <div className="top"><Code /></div>
                        <div className="middle">
                            <h2>Front-end Foundation</h2>
                            <h3>Cybersoft academy</h3>
                        </div>
                        <span><Calendar />12/2020  - 07/2021</span>
                    </div>

                </StyledEduItem>
            </StyledEduGrid>
            {/* <div className="logo">
            </div>
            <div className="timeline">

                <div class="wrapper left">
                    
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
                
                <div class="wrapper left">
                    
                </div>

                <div className="circle"></div>


            </div> */}

        </StyledEducation>
    )
}

export default Education
