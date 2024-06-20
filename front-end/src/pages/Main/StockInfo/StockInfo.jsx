import React from 'react';
import './stockInfo.css';
import { Chart01 } from '../../../components/chart/Chart';
import { Chart04 } from '../../../components/chart/Chart04';
import { userData01 } from '../../../data/dummyData01';

export const StockInfo = () => {
    return (
        <div className="stockinfo">
            <div className="stockinfo-title">삼성전자</div>
            <table className="stockinfo-table">
                <tr>
                    <th>종가</th>
                    <td>num</td>
                    <th>고가</th>
                    <td>num</td>
                    <th>저가</th>
                    <td>num</td>
                </tr>
                <tr>
                    <th>시가</th>
                    <td>num</td>
                    <th>전일대비변동</th>
                    <td>num</td>
                    <th>상장주식수</th>
                    <td>num</td>
                </tr>
            </table>
            <div className="stockinfo-chart-candle">
                <Chart04 data={userData01} dataKey="close" />
            </div>
            <div className="stockinfo-chart-line">
                <Chart01 data={userData01} dataKey="close" />
            </div>
        </div>
    );
};
