import React from 'react';
import { styled } from 'styled-components';

const LoginPage = () => {
    const githubOAuthURL = `https://github.com/login/oauth/authorize?client_id=d8a665ac31aa1a980f7d&scope=user`;

    const handleLoginClick = () => {
        window.location.href = githubOAuthURL;
    };

    return (
        <Wrapper>
            <LoginBtn type="button" onClick={handleLoginClick}>
                GitHub으로 로그인
            </LoginBtn>
        </Wrapper>
    );
};

export default LoginPage;
const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding: 24px;
`;

const LoginBtn = styled.button`
    display: block;
    width: 100%;
    height: 32px;
    border-radius: 24px;
    border: 1px solid #111;
    background-color: #fff;
    color: #111;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
`;
