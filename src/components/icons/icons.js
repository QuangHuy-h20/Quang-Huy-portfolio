import React from 'react'
import PropTypes from 'prop-types'
import { Github, LinkedIn, Facebook, Codepen, Instagram } from '@components/icons'
const Icon = ({ name }) => {
    switch (name) {
        case 'Github':
            return <Github />
        case 'Linkedin':
            return <LinkedIn />
        case 'Facebook':
            return <Facebook />
        case 'Codepen':
            return <Codepen />
        case 'Instagram':
            return <Instagram />

        default:
            return '';
    }

}

Icon.prototypes = {
    name: PropTypes.string.isRequired
}

export default Icon;
