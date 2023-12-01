import React from 'react';
import { styled } from 'styled-components';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <Wrapper>
            <Header />
            <Inner>
                <Outlet />
            </Inner>
        </Wrapper>
    );
};

export default Layout;
const Wrapper = styled.div`
    width: 100%;
`;

const Inner = styled.div`
    width: 100%;
    padding: 84px 24px 60px;
`;
