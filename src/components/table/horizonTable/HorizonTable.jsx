import React from 'react';
import './horizonTable.css';
import { userData03 } from '../../../data/dummyData03';

export const HorizonTableTop20 = ({ title }) => {
    return (
        <div id="table-top20">
            <div className="tableTitle">{title}</div>
            <table className="table-h">
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>종목명</th>
                        <th>현재가</th>
                        <th>변동</th>
                        <th>등락률</th>
                    </tr>
                </thead>
                <tbody>
                    {userData03.map((data, index) => (
                        <tr key={index}>
                            <td>{data.rank}</td>
                            <td className="data-text"> {data.name}</td>
                            <td className="data-num">{data.now.toLocaleString()}</td>
                            <td className={`data-num ${data.rate > 0 ? 'positive' : 'negative'}`}>
                                {data.calc.toLocaleString()}
                            </td>
                            <td className={`data-num ${data.rate > 0 ? 'positive' : 'negative'}`}>
                                {(data.rate * 100).toFixed(2)}%
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
