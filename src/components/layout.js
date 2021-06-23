import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Head, Header, Footer, Social, Loader } from '@components';
import { GlobalStyle, theme } from '@styles';

if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]', {
        speed: 2000,
        speedAsDuration: true,
    })
}

const StyledLayout = styled.div`
    display:flex;
    flex-direction:column;
    min-height:100vh;
`

const Layout = ({ children, location }) => {
    const isHome = location.pathname === '/';
    const [isLoading, setIsLoading] = useState(isHome);

    useEffect(() => {
        if (isLoading) {
            return;
        }

        if (location.hash) {
            const id = location.hash.substring(1); // location.hash without the '#'
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView();
                    el.focus();
                }
            }, 0);
        }
    }, [isLoading]);
    return (
        <>
            <Head />
            <div id="root">
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    {isLoading && isHome ? (
                        <Loader isFinish={() => setIsLoading(false)} />
                    ) : (
                        <StyledLayout>
                            <Header isHome={isHome} />
                            <Social isHome={isHome} />
                            <div id="content">
                                {children}
                                <Footer />
                            </div>
                        </StyledLayout>
                    )}
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
