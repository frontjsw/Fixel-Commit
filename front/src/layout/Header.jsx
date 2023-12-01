import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <Wrapper>
            <Logo></Logo>
            <Title>Pixel Commit</Title>
            <BtnWrap></BtnWrap>
        </Wrapper>
    );
};

export default Header;

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: #111;
`;

const Logo = styled.div``;

const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    color: #fff;
`;

const BtnWrap = styled.div``;
