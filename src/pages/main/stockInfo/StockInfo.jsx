import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // useParams를 import
import styles from "./stockInfo.module.css";
import { CandleChart } from "../../../components/chart/CandleChart";
import { LineChart } from "../../../components/chart/LineChart";
import { getStockinfo } from "../../../utils/stockinfoApi"; // API 호출 수정
import { Loading } from "../../../components/loading/Loading";

export const StockInfo = () => {
    const { id } = useParams(); // URL에서 id를 추출
    const [stockData, setStockData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getStockinfo(id); // id를 이용해 API 호출
                setStockData(data);
            } catch (error) {
                console.error("StockInfo fetchData error: ", error);
            }
        };
        fetchData();
    }, [id]);

    const close = stockData ? stockData[0].closingPrice : "num";
    const high = stockData ? stockData[0].highPrice : "num";
    const low = stockData ? stockData[0].lowPrice : "num";
    const open = stockData ? stockData[0].openingPrice : "num";
    const rate = stockData ? (stockData[0].fluctuatingRate * 100).toFixed(2) : "num";
    const volume = stockData ? parseFloat(stockData[0].tradingVolume).toFixed(2) : "num";

    if (!stockData) {
        return (
            <div>
                <Loading />
            </div>
        );
    }

    return (
        <div className={styles.stockinfo}>
            <div className={styles.title}>{id}</div> {/* id 값 출력 */}
            <table className={styles.table}>
                <tr>
                    <th>Closing Price (원)</th>
                    <td>{close.toLocaleString()}</td>
                    <th>Highest Price (원)</th>
                    <td>{high.toLocaleString()}</td>
                    <th>Lowest Price (원)</th>
                    <td>{low.toLocaleString()}</td>
                </tr>
                <tr>
                    <th>Opening Price (원)</th>
                    <td>{open.toLocaleString()}</td>
                    <th>Rate (%)</th>
                    <td style={{ color: rate < 0 ? "var(--down-color)" : "var(--up-color)" }}>
                        {rate}
                    </td>
                    <th>Volume</th>
                    <td>{volume.toLocaleString()}</td>
                </tr>
            </table>
            <div className={styles.candle}>
                <CandleChart
                    chartData={stockData.map((item) => ({
                        open: item.openingPrice,
                        close: item.closingPrice,
                        high: item.highPrice,
                        low: item.lowPrice,
                        volume: item.tradingVolume,
                        rate: item.fluctuatingRate,
                        date: item.date || "",
                    }))}
                />
            </div>
            <div className={styles.line}>
                <LineChart
                    dataKey="close"
                    chartData={stockData.map((item) => ({
                        open: item.openingPrice,
                        close: item.closingPrice,
                        high: item.highPrice,
                        low: item.lowPrice,
                        volume: item.tradingVolume,
                        rate: item.fluctuatingRate,
                        date: item.date || "",
                    }))}
                />
            </div>
        </div>
    );
};
