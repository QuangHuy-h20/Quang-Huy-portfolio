import React, { useEffect, useRef } from 'react';
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import sr from '@utils/sr'
import { usePrefersReducedMotion } from '@hooks'
import { srConfig } from '@config'
import { Github, External } from '@components/icons'




const StyledProjects = styled.ul`

`

const StyledProjectsItem = styled.li`

`

const Projects = () => {

    const query = useStaticQuery(graphql`
  {
    projects:allMarkdownRemark(
        sort: {fields: frontmatter___date}
    ) {
      edges {
        node {
          frontmatter {
            title
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
            <StyledProjects>
                {data && data.map(({ node }, index) => {
                    const { frontmatter, html } = node;
                    const { title, github, tech, external } = frontmatter;
                    return (
                        <StyledProjectsItem>
                            <div className="project-content">
                                <div>
                                    <p>Project</p>
                                    <h3 className="title">{title}</h3>
                                    <div className="card" dangerouslySetInnerHTML={{ __html: html }}></div>
                                    {tech.length && (
                                        <ul className="tech-list">
                                            {tech.map((item, index) => <li key={index}>{item}</li>)}
                                        </ul>
                                    )}
                                    <div className="direct">

                                    </div>
                                </div>

                            </div>
                            <div className="project-image">
                                <a href={github} target="_blank" rel="noreferrer">
                                    <Github />
                                </a>
                                <a href={external} target="_blank" rel="noreferrer">
                                    <External />
                                </a>
                            </div>
                        </StyledProjectsItem>
                    )
                })}
            </StyledProjects>

        </section>
    )
}

export default Projects
