import React, { useState, useEffect } from 'react';
import './login.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { ImageBtn } from '../../../components/button/ImgBtn/ImgBtn';
import KakaoLoginLogo from '../../../assets/kakao_login_medium_wide.png';

export const Login = () => {
    const navigate = useNavigate();

    const REST_API_KEY = import.meta.env.VITE_APP_REST_API_KEY_KAKAO;
    const REDIRECT_URI = import.meta.env.VITE_APP_REDIRECT_URI_KAKAO;
    const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const kakaoHandler = () => {
        window.open(KAKAO_AUTH_URI, '_self');
    };

    return (
        <div className="login">
            <div className="login-wrapper">
                <div className="login-title">로그인 할 사이트를 고르시오</div>
                <div className="login-btn-wrapper">
                    <div className="login-btn">
                        <ImageBtn onClick={kakaoHandler} imageSrc={KakaoLoginLogo} alt="kakao" />
                    </div>
                </div>
            </div>
        </div>
    );
};
