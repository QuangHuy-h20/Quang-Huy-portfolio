import React from 'react'
import styled from 'styled-components'
import { social } from '@config'
import { Icon } from '@components/icons/'

const StyledFooter = styled.footer`
    min-height:100px;
    flex-direction:column;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    .socialList{
        ${({ theme }) => theme.mixins.flexBetween};
        li{
            padding:0 15px;
            svg{
                width:25px;
                height:25px;
            }
        }
        
    }
    p{
        font-size:var(--fs-sm);
        color:var(--gray);
    }
`

const StyledSocial = styled.div`
    display:none;
    @media (max-width: 768px) {
        display:block;
    }
`
const Footer = () => {
    return (
        <StyledFooter>
            <StyledSocial>
                <ul className="socialList">
                    {social.map(({ name, url }, index) => (
                        <li key={index}>
                            <a href={url} target="_blank" rel="noreferrer">
                                <Icon name={name} />
                            </a>
                        </li>
                    ))}
                </ul>
            </StyledSocial>
            <p>Designed and built by Quang Huy</p>
        </StyledFooter>
    )
}

export default Footer
