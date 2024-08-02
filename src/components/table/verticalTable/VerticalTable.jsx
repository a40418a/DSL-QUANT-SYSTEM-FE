import React from 'react';
import './verticalTable.css';

export const VerticalTable = ({ title, data }) => {
    return (
        <div>
            <div className="tableTitle">{title}</div>
            <table className="table-v">
                <tr>
                    <th className="v-th">이름</th>
                    <td className="v-td">최승아</td>
                </tr>
                <tr>
                    <th className="v-th">전화번호</th>
                    <td className="v-td">010-7110-0441</td>
                </tr>
                <tr>
                    <th className="v-th">생년월일</th>
                    <td className="v-td">2001.04.18</td>
                </tr>
                <tr>
                    <th className="v-th">성별</th>
                    <td className="v-td">여</td>
                </tr>
            </table>
        </div>
    );
};
