import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const LoginHandler = (props) => {
    const navigate = useNavigate();
    const code = new URL(window.location.href).searchParams.get('code'); //  인가 코드를 추출

    // 인가코드를 백엔드로 보내는 코드
    useEffect(() => {
        const kakaoLogin = async () => {
            try {
                const res = await axios({
                    method: 'GET', // GET 요청 방식
                    url: `${import.meta.env.VITE_APP_REDIRECT_URI_KAKAO}/?code=${code}`,
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        'Access-Control-Allow-Origin': '*',
                    },
                });

                if (res.data && res.data.account && res.data.account.kakaoName) {
                    console.log(res); // 응답 로그
                    localStorage.setItem('name', res.data.account.kakaoName); // 로컬 스토리지에 사용자 이름 저장
                    navigate('/home'); // 홈 페이지로 리다이렉션
                } else {
                    console.error('Unexpected response structure:', res);
                }
            } catch (error) {
                console.error('Login failed', error);
            }
        };
        kakaoLogin();
    }, [navigate, code]);

    return <div>로그인 진행 중</div>;
};
