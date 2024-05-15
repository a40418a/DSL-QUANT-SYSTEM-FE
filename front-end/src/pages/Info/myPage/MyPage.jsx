import React, { useState, useEffect } from 'react';
import './myPage.css';
import { TableVertical } from '../../../components/table/tableVertical/TableVertical';
import { MyPageDTO } from './MyPageDTO'; // DTO import

export const MyPage = () => {
    const [userInfo, setUserInfo] = useState(
        new MyPageDTO('최승아', '010-7110-0441', '2001.04.18', '여자', ['기록1', '기록2'])
    );

    useEffect(() => {
        // 여기서 API 호출 등을 통해 실제 데이터로 userInfo를 업데이트 할 수 있습니다.
        // 예시로는 useState의 초기값을 사용합니다.
    }, []);

    return (
        <div className="mypage">
            <div className="mypage-title">
                <div className="mypage-title-name">{userInfo.userName}</div>
                <div className="mypage-title-content">님의 마이페이지</div>
            </div>
            <div className="mypage-info">
                <div className="mypage-main-title">회원 개인정보</div>
                <TableVertical />
            </div>
            <div className="mypage-backtest">
                <div className="mypage-main-title">
                    백테스팅 검색 기록
                    <div className="mypage-backtest-title-sub">최근 10개의 기록만 열람할 수 있습니다.</div>
                </div>
                <div className="mypage-main-table">{userInfo.backtestRecords.join(', ')}</div>
            </div>
        </div>
    );
};
