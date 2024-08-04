//상단 메뉴 박스
import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import './navigator.css';

export const Navigator = () => {
    const [activePage, setActivePage] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    // useLocation의 pathname을 기반으로 현재 페이지 설정
    useEffect(() => {
        setActivePage(location.pathname);
    }, [location]);

    const logoutHandler = async () => {
        try {
            // 로컬 스토리지에서 JWT 토큰 가져오기
            const token = localStorage.getItem('jwt');

            // 서버에 로그아웃 요청 보내기
            await axios.post(
                'http://43.200.199.72:8080/logout',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            logout();

            // 로그아웃 성공 메시지 표시
            alert('로그아웃 완료');

            // 로그인 페이지로 리다이렉트
            navigate('/login');
        } catch (error) {
            // 로그아웃 과정에서 에러가 발생한 경우 콘솔에 에러 메시지 출력
            console.error('로그아웃 진행 도중에 오류가 발생했습니다', error);
        }
    };

    if (location.pathname !== '/' && location.pathname !== '/login') {
        return (
            <div className="navigator">
                <div className="navigator-wrapper">
                    <div className="navigator-title">
                        <Link to="/home" className="navigator-title">
                            DSL QUANT
                        </Link>
                    </div>
                    <ul className="navigator-menu-wrapper">
                        <li
                            className={`navigator-menu ${activePage === '/stockinfo' ? 'active' : ''}`}
                            onClick={() => navigate('/stockinfo')}
                        >
                            상세정보
                        </li>
                        <li
                            className={`navigator-menu ${
                                activePage === '/strategy' ||
                                activePage === '/strategy/golden' ||
                                activePage === '/strategy/bollinger' ||
                                activePage === '/strategy/rsi' ||
                                activePage.startsWith('/result')
                                    ? 'active'
                                    : ''
                            }`}
                            onClick={() => navigate('/strategy')}
                        >
                            전략설정
                        </li>
                        <li
                            className={`navigator-menu ${
                                activePage === '/mypagecheck' || activePage === '/mypage' ? 'active' : ''
                            }`}
                            onClick={() => navigate('/mypagecheck')}
                        >
                            마이페이지
                        </li>
                    </ul>
                    <div className="navigator-logout">
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
