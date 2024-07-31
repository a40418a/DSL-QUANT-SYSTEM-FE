import React, { useState, useEffect } from 'react';
import './myPage.css';
import { TableVertical } from '../../../components/table/tableVertical/TableVertical';
import { MyPageDTO } from '../../../types/MyPageDTO';

export const MyPage = () => {
    const [userInfo] = useState(new MyPageDTO('최승아', '010-7110-0441', '2001.04.18', '여자', ['기록1', '기록2']));

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
                <div className="mypage-main-title">백테스팅 기록</div>
                <table className="mypage-main-table">
                    <thead>
                        <tr>
                            <th>date</th>
                            <th>universe</th>
                            <th>weight</th>
                            <th>initial</th>
                            <th>period</th>
                            <th>file</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2024-05-22</td>
                            <td>한국</td>
                            <td>동일 비중 결합</td>
                            <td>50 만원</td>
                            <td>월별</td>
                            <td>index.html</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
