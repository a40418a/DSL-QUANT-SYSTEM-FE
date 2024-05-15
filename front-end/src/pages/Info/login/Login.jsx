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
                    <div className="login-btn">
                        <WideBtn id="google" logo={<Google />} text="구글" />
                    </div>
                    <div className="login-btn">
                        <WideBtn id="naver" logo={<Naver />} text="네이버" />
                    </div>
                </div>
                <div className="login-or">
                    <div className="login-or-line"></div>
                    <div className="login-or-text">OR</div>
                    <div className="login-or-line"></div>
                </div>
                <div className="login-option">
                    <div className="login-option-text">계정이 없다면?</div>
                    <TextBtn className="login-option-btn" text="회원가입" link="/signup" />
                </div>
            </div>
        </div>
    );
};
