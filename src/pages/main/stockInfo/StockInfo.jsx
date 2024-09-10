import React, { useEffect, useState } from "react";
import styles from "./stockInfo.module.css";
import { CandleChart } from "../../../components/chart/CandleChart";
import { LineChart } from "../../../components/chart/LineChart";
import { getKosdaq } from "../../../utils/kosdakApi";
import { Loading } from "../../../components/loading/Loading";

export const StockInfo = () => {
    const [kosdaq, setKosdaq] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const kosdaqData = await getKosdaq();
                setKosdaq(kosdaqData);
            } catch (error) {
                console.error("StockInfo fetchData error: ", error);
            }
        };
        fetchData();
    }, []);

    if (!kosdaq) {
        return (
            <div>
                <Loading />
            </div>
        );
    }

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
                <CandleChart
                    chartData={kosdaq.map((item) => ({
                        open: item.openingPrice,
                        close: item.closingPrice,
                        high: item.highPrice,
                        low: item.lowPrice,
                        volume: item.tradingVolume,
                        rate: item.fluctuatingRate,
                        date: item.date || "", // date가 없을 경우 빈 문자열
                    }))}
                />
            </div>
            <div className={styles.line}>
                <LineChart
                    dataKey="close"
                    chartData={kosdaq.map((item) => ({
                        open: item.openingPrice,
                        close: item.closingPrice,
                        high: item.highPrice,
                        low: item.lowPrice,
                        volume: item.tradingVolume,
                        rate: item.fluctuatingRate,
                        date: item.date || "", // date가 없을 경우 빈 문자열
                    }))}
                />
            </div>
        </div>
    );
};
