import React, { useEffect, useRef } from 'react';
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import sr from '@utils/sr'
import { usePrefersReducedMotion } from '@hooks'
import { srConfig } from '@config'
import { Github, External } from '@components/icons'

const StyledProjectsGrid = styled.ul`

`

const StyledProjectsItem = styled.li`
    margin-bottom: 100px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap:20px;
    align-items: center;

    &:nth-child(2){
        .project-content{
            text-align:right;
            grid-area: 1/13/1/8;

            .project-description{
            box-shadow: -8px 9px 14px 0 rgba(0, 0,0, .43);
            }
            .tech-list{
                justify-content:flex-end;
                li{
                    padding: 0 0 5px 10px;
                }
            }
            .direct{
                a{
                    height:100%;
                    margin:0 0 0 20px;
                }
            }
        }

        .project-image{
            grid-area: 1/1/1/8;
        }

        
    }

    &:last-child{
        margin-bottom:0;
    }

    .project-content{
        display:flex;
        width:100%;
        flex-direction:column;
        grid-column: 1/6;
        text-align:left;

        h3{
            margin-bottom:8px;
            font-size: var(--fs-sm);
            color: rgba(255, 168, 131, .93);
        }

        .title{
            font-size: 26px;
            margin-bottom: 15px;
        }

        .project-description{
            padding:24px;
            background: rgba(38,40,41,.85);
            box-shadow: 8px 9px 14px 0 rgba(0, 0,0, .43);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur( 10px);
            border-radius: 5px;
            border: 1px solid rgba(37, 37, 37, .26);
            font-size: var(--fs-sm);
        }

        .tech-list{
            display:flex;
            margin:16px 0;
            li{
                
                padding: 0 10px 5px 0;
                font-size:var(--fs-xs);
                color: var(--gray);
            }

            @media screen and (max-width:1200px){
                display:grid;
                grid-template-columns:1fr;
            }
        }

        .direct{
            a{
                height:100%;
                margin-right:20px;
            }
        }
    }

    .project-image{
        grid-column: 6/-1;
        border: 1px solid var(--light-orange);
        border-radius: 2px;
    }

    @media screen and (max-width:768px){
        .project-content{
            z-index: 2 !important;
            grid-row: 1/-1 !important;
            grid-column:1/-1 !important;
            .inner{
                width:100%;
                padding:20px 30px;
                .project-description{
                    background: rgba(38,40,41,.20);
                    border:none;
                }
            }

        }
        .project-image{
            height:100% !important;
            opacity:.2 !important;
            grid-row: 1/-1 !important;
            grid-column:1/-1 !important;
            
        }
    }

`

const Projects = () => {

    const query = useStaticQuery(graphql`
    {
        projects:allMarkdownRemark(
          sort: {fields: fileAbsolutePath}
          filter: {fileAbsolutePath: {regex: "/projects/"}
    }
        ) {
          edges {
            node {
                frontmatter {
                title
                image {
                    childImageSharp {
                        gatsbyImageData(width: 750, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                    }
                }
                github
                tech
                external
              }
              html
            }
          }
        }
      }
      
`);
    const data = query.projects.edges.filter(({ node }) => node);
    const revealContainer = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        sr.reveal(revealContainer.current, srConfig('bottom'));
    }, []);

    return (
        <section id="portfolio" ref={revealContainer}>
            <h2 className="heading">What I've built</h2>
            <StyledProjectsGrid>
                {data && data.map(({ node }, index) => {
                    const { frontmatter, html } = node;
                    const { title, github, tech, external, image } = frontmatter;
                    const images = getImage(image);
                    return (
                        <StyledProjectsItem key={index}>
                            <div className="project-content">
                                <div className="inner">
                                    <h3>Project</h3>
                                    <h2 className="title">{title}</h2>
                                    <div
                                        className="project-description"
                                        dangerouslySetInnerHTML={{ __html: html }}
                                    />
                                    {tech.length && (
                                        <ul className="tech-list">
                                            {tech.map((item, index) => <li key={index}>{item}</li>)}
                                        </ul>
                                    )}
                                    <div className="direct">
                                        <a href={github} target="_blank" rel="noreferrer">
                                            <Github />
                                        </a>
                                        <a href={external} target="_blank" rel="noreferrer">
                                            <External />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-image">
                                <a href={external ? external : github ? github : '#'} target="_blank" rel="noreferrer">
                                    <GatsbyImage image={images} alt={title} />
                                </a>
                            </div>
                        </StyledProjectsItem>
                    )
                })}
            </StyledProjectsGrid>

        </section>
    )
}

export default Projects
