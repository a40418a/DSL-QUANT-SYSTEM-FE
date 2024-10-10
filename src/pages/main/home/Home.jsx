import React, { useState, useEffect } from "react";
import { FeaturedInfo } from "../../../components/featuredInfo/FeaturedInfo";
import styles from "./home.module.css";
import { HorizonTableTop20 } from "../../../components/table/horizonTable/HorizonTable";
import { ArrowDown, ArrowUp } from "../../../components/emoticon/Arrow";
import { ChartBox } from "../../../components/box/chartBox/ChartBox";
import { LineChart, LineChartBacktest } from "../../../components/chart/LineChart";
import { SelectBox } from "../../../components/box/selectBox/SelectBox";
import { getLastBack } from "../../../utils/lastBackApi";
import { Loading } from "../../../components/loading/Loading";

export const Home = () => {
    const [formData, setFormData] = useState({
        strategy: "",
        label: "",
    });
    const [backtestData, setBacktestData] = useState(null);
    const [loading, setLoading] = useState(false);

    const options_strategy = [
        { label: "골든/데드", value: "backtesting_gd" },
        { label: "볼린저밴드", value: "backtesting_bb" },
        { label: "RSI, MFI, MACD 지표 이용", value: "backtesting_ind" },
        { label: "엔벨로프", value: "backtesting_env" },
        { label: "윌리엄스", value: "backtest_w" },
    ];

    const handleChange = async (e) => {
        const { name, value } = e.target;
        const selectedOption = options_strategy.find((option) => option.value === value);
        setFormData({ ...formData, [name]: value, label: selectedOption.label });
        setLoading(true);

        try {
            const data = await getLastBack(value);
            setBacktestData(data);
        } catch (error) {
            console.error("Home handleChange error: ", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.home}>
            <FeaturedInfo />
            <div className={styles.wrapper}>
                <div className={styles.backTest}>
                    <div className={styles.title}>가장 최근에 진행한 백테스팅</div>
                    <div className={styles.option}>
                        <SelectBox
                            placeholder="전략을 선택하세요."
                            options={options_strategy}
                            name="strategy"
                            value={formData.strategy}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.backChart}>
                        {loading ? (
                            <Loading />
                        ) : (
                            backtestData && (
                                <ChartBox
                                    title={formData.label}
                                    currency="₩"
                                    price={backtestData[0].finalAsset.toFixed(2)}
                                    arrow={
                                        backtestData[0].profitRate >= 0 ? (
                                            <ArrowUp />
                                        ) : (
                                            <ArrowDown />
                                        )
                                    }
                                    rate={backtestData[0].profitRate.toFixed(2)}
                                    chart={
                                        <LineChartBacktest
                                            dataKey="profitRate"
                                            chartData={backtestData.map((item) => ({
                                                id: item.id,
                                                finalAsset: item.finalAsset,
                                                profit: item.profit,
                                                numberOfTrades: item.numberOfTrades,
                                                backtesting_date: item.backtesting_date || "",
                                                profitRate: item.profitRate,
                                            }))}
                                        />
                                    }
                                />
                            )
                        )}
                    </div>
                </div>
                <div className={styles.table}>
                    <div className={styles.title}>TOP 20 종목</div>
                    <HorizonTableTop20 />
                </div>
            </div>
        </div>
    );
};
