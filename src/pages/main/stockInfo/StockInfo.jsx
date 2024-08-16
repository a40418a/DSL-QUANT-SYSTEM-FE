import React from 'react';
import styles from './stockInfo.module.css';
import { CandleChart } from '../../../components/chart/CandleChart';
import { LineChart } from '../../../components/chart/LineChart';
import { userData01 } from '../../../data/dummyData01';

export const StockInfo = () => {
    return (
        <div className={styles.stockinfo}>
            <div className={styles.title}>삼성전자</div>
            <table className={styles.table}>
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
            <div className={styles.candle}>
                <CandleChart data={userData01} dataKey="close" />
            </div>
            <div className={styles.line}>
                <LineChart data={userData01} dataKey="close" />
            </div>
        </div>
    );
};
