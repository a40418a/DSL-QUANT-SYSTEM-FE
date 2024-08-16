//상단 메뉴 박스
import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import styles from './navigator.module.css';

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
            <div className={styles.navigator}>
                <div>
                    <Link to="/home" className={styles.title}>
                        DSL QUANT
                    </Link>
                </div>
                <ul className={styles.menuWrapper}>
                    <li
                        className={`${styles.menu} ${activePage === '/stockinfo' ? 'active' : ''}`}
                        onClick={() => navigate('/stockinfo')}
                    >
                        상세정보
                    </li>
                    <li
                        className={`${styles.menu} ${
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
                </ul>
                <div className={styles.account}>
                    <Link to="/mypage" onClick={() => navigate('/mypage')} className={styles.accountName}>
                        <p>최승아</p>님
                    </Link>
                    <Link to="/" onClick={logoutHandler} className={styles.accountLogout}>
                        로그아웃
                    </Link>
                </div>
            </div>
        );
    }
    return null;
};
