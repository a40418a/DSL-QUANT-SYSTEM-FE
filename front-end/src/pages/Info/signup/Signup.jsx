//로그인 화면
import React, {useState} from "react";
import "./signup.css";
import { WideBtn } from "../../../components/button/WideBtn/WideBtn";
import {Kakao,Google,Naver} from "../../../components/emoticon/logo/Logo";

export const Signup=()=>{
    return(
        <div className="signup">
            <div className="signup-wrapper">
                <div className="signup-title">
                    회원가입 할 사이트를 고르시오
                </div>
                <div className="signup-btn-wrapper">
                    <div className="signup-btn">
                        <WideBtn id="kakao" logo={<Kakao/>} text="카카오톡"/>
                    </div>
                    <div className="signup-btn">
                        <WideBtn id="google" logo={<Google/>} text="구글"/>
                    </div>
                    <div className="signup-btn">
                        <WideBtn id="naver" logo={<Naver/>} text="네이버"/>
                    </div>
                </div>
            </div>        
        </div>
    )
}