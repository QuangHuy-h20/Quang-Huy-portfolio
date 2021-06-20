import * as React from "react"
import PropTypes from 'prop-types';
import { Layout, Hero, About, Education, Projects, Contact } from '@components';
import styled from 'styled-components'

const StyledMain = styled.main`
  counter-reset: section;
`

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMain className="fill">
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
    </StyledMain>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage
