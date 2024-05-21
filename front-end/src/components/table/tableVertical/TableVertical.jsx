import './tableVertical.css';
import { MyPageDTO } from '../../../dto/MyPageDTO'; // DTO import
import React, { useState, useEffect } from 'react';

export const TableVertical = ({ title, data }) => {
    const [userInfo, setUserInfo] = useState(
        new MyPageDTO('최승아', '010-7110-0441', '2001.04.18', '여자', ['기록1', '기록2'])
    );
    return (
        <div className="table">
            <div className="tableTitle">{title}</div>
            <table>
                <tbody>
                    <tr>
                        <th className="vertical-h">이름</th>
                        <td className="vertical-d">{userInfo.userName}</td>
                    </tr>
                    <tr>
                        <th className="vertical-h">전화번호</th>
                        <td className="vertical-d">{userInfo.userPhone}</td>
                    </tr>
                    <tr>
                        <th className="vertical-h">생년월일</th>
                        <td className="vertical-d">{userInfo.userBirthday}</td>
                    </tr>
                    <tr>
                        <th className="vertical-h">성별</th>
                        <td className="vertical-d">{userInfo.userGender}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
