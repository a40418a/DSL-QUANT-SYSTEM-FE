import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext'; // AuthContext 경로가 맞는지 확인하세요
import './topbar.css';

export const Topbar = () => {
    const [activePage, setActivePage] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext); // AuthContext에서 logout 함수 가져오기

    useEffect(() => {
        // useLocation의 pathname을 기반으로 현재 페이지 설정
        setActivePage(location.pathname);
    }, [location]);

    const logoutHandler = async () => {
        try {
            // 로컬 스토리지에서 JWT 토큰 가져오기
            const token = localStorage.getItem('jwt');

            // 서버에 로그아웃 요청 보내기
            await axios.post(
                'http://localhost:8080/logout',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // 인증 헤더에 JWT 토큰 포함
                        'Content-Type': 'application/json', // 콘텐츠 타입 설정
                    },
                }
            );

            // AuthContext의 logout 함수 호출하여 클라이언트 측 로그아웃 처리
            logout();

            // 로그아웃 성공 메시지 표시
            alert('Successfully logged out');

            // 로그인 페이지로 리다이렉트
            navigate('/login');
        } catch (error) {
            // 로그아웃 과정에서 에러가 발생한 경우 콘솔에 에러 메시지 출력
            console.error('Error logging out:', error);
        }
    };

    if (location.pathname !== '/' && location.pathname !== '/login') {
        return (
            <div className="topbar">
                <div className="topbar-wrapper">
                    <div className="topbar-title">
                        <Link to="/home">DSL QUANT</Link>
                    </div>
                    <ul className="topbar-menu-wrapper">
                        <li className={`topbar-menu ${activePage === '/stockinfo' ? 'active' : ''}`}>
                            <Link to="/stockinfo">주식 상세정보</Link>
                        </li>
                        <li
                            className={`topbar-menu ${
                                activePage === '/strategy1' ||
                                activePage === '/strategy2' ||
                                activePage === '/strategy3'
                                    ? 'active'
                                    : ''
                            }`}
                        >
                            <Link to="/strategy1">전략설정</Link>
                        </li>
                        <li
                            className={`topbar-menu ${
                                activePage === '/mypagecheck' || activePage === '/mypage' ? 'active' : ''
                            }`}
                        >
                            <Link to="/mypagecheck">마이페이지</Link>
                        </li>
                    </ul>
                    <div className="topbar-logout">
                        <Link to="/" onClick={logoutHandler}>
                            로그아웃
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
    return null;
};

export default Topbar;
