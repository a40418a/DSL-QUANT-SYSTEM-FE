import React, { useEffect, useState } from "react";
import styles from "./stockInfo.module.css";
import { CandleChart } from "../../../components/chart/CandleChart";
import { LineChart } from "../../../components/chart/LineChart";
import { Loading } from "../../../components/loading/Loading";
import { getMarket } from "../../../utils/marketApi";

export const StockInfo = () => {
    const [market, setMarket] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const marketName = getMarket(window.location.pathname); // 현재 URL에서 market 추출
                const marketData = await getStockinfo(marketName); // getStockinfo 호출
                setMarket(marketData);
            } catch (error) {
                console.error("StockInfo fetchData error: ", error);
            }
        };
        fetchData();
    }, []);

    const close = market ? market[0].closingPrice : "num";
    const high = market ? market[0].highPrice : "num";
    const low = market ? market[0].lowPrice : "num";
    const open = market ? market[0].openingPrice : "num";
    const rate = market ? market[0].fluctuatingRate : "num";
    const volume = market ? market[0].tradingVolume : "num";

    if (!market) {
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
                    <td>{close}</td>
                    <th>고가</th>
                    <td>{high}</td>
                    <th>저가</th>
                    <td>{low}</td>
                </tr>
                <tr>
                    <th>시가</th>
                    <td>{open}</td>
                    <th>전일대비변동</th>
                    <td>{rate}</td>
                    <th>상장주식수</th>
                    <td>{volume}</td>
                </tr>
            </table>
            <div className={styles.candle}>
                <CandleChart
                    chartData={market.map((item) => ({
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
                    chartData={market.map((item) => ({
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
