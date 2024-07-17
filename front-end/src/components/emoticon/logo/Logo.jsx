import React from 'react';
import './logo.css';
import KakaoLogo from './btn_kakao.svg';
import GoogleLogo from './btn_google.svg';
import NaverLogo from './btn_naver.svg';

export const Kakao = () => {
    return <img src={KakaoLogo} alt="카카오톡로고" />;
};
export const Google = () => {
    return <img src={GoogleLogo} alt="구글로고" />;
};
export const Naver = () => {
    return <img src={NaverLogo} alt="네이버로고" />;
};
