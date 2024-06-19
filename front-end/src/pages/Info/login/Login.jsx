import React, { useState, useEffect } from 'react';
import './login.css';
import { WideBtn } from '../../../components/button/WideBtn/WideBtn';
import { Kakao, Google, Naver } from '../../../components/emoticon/logo/Logo';
import { TextBtn } from '../../../components/button/TextBtn/TextBtn';
import { useLocation, useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();

    const REST_API_KEY = import.meta.env.VITE_APP_REST_API_KEY_KAKAO;
    const REDIRECT_URI = import.meta.env.VITE_APP_REDIRECT_URI_KAKAO;
    const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const code = new URL(window.location.href).searchParams.get('code');

    const kakaoHandler = () => {
        window.open(KAKAO_AUTH_URI, '_self');
    };

    return (
        <div className="login">
            <div className="login-wrapper">
                <div className="login-title">로그인 할 사이트를 고르시오</div>
                <div className="login-btn-wrapper">
                    <div className="login-btn">
                        <WideBtn id="kakao" logo={<Kakao />} text="카카오톡" onClick={kakaoHandler} />
                    </div>
                </div>
            </div>
        </div>
    );
};
