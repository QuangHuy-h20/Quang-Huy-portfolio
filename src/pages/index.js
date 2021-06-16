import * as React from "react"
import PropTypes from 'prop-types';
import { Layout } from '@components';



const IndexPage = ({ location }) => (
  <Layout location={location}>
    
  </Layout>
);


IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage
