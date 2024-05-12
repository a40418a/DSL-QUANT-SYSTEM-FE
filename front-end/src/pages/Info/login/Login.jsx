//로그인 화면
import React, { useEffect, useState } from 'react';
import './login.css';
import { WideBtn } from '../../../components/button/WideBtn/WideBtn';
import { Kakao, Google, Naver } from '../../../components/emoticon/logo/Logo';
import { TextBtn } from '../../../components/button/TextBtn/TextBtn';
import axios from 'axios';

export const Login = () => {
    const handleGoogleLogin = async () => {
        await axios
                .get("/api")
                .then((response)=>{
                    console.log(response);
                })
                .catch((error)=>{
                    console.log(error);
                })
    };
    return (
        <div className='login'>
            <div className="login-wrapper">
            <div className="login-title">로그인 할 사이트를 고르시오</div>
            <div className="login-btn-wrapper">
                <div className="login-btn">
                    <WideBtn id="kakao" logo={<Kakao/>} text="카카오톡" />
                </div>
                <div className="login-btn">
                    <WideBtn id="google" logo={<Google />} text="구글" onClick={handleGoogleLogin}/>
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
