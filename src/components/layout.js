import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Head, Header } from '@components';
import { GlobalStyle, theme } from '@styles';


if (typeof window !== 'undefined') {
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]');
}

const Layout = ({ children, location }) => {
    const isHome = location.pathname === '/';
    const [isLoading, setIsLoading] = useState(isHome);

    return (
        <>
            <Head />
            <div id="root">
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Header isHome={isHome}/>
                    <div id="content">
                        {children}
                    </div>
                </ThemeProvider>
            </div>
        </>
    );
}
Layout.propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired,
};

export default Layout;
