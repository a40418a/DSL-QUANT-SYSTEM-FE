import React, { useState, useEffect } from "react";
import { FeaturedInfo } from "../../../components/featuredInfo/FeaturedInfo";
import styles from "./home.module.css";
import { HorizonTableTop20 } from "../../../components/table/horizonTable/HorizonTable";
import { ArrowDown, ArrowUp } from "../../../components/emoticon/Arrow";
import { ChartBox } from "../../../components/box/chartBox/ChartBox";
import { LineChart } from "../../../components/chart/LineChart";
import { SelectBox } from "../../../components/box/selectBox/SelectBox";
import { getLastBack } from "../../../utils/lastBackApi";
import { Loading } from "../../../components/loading/Loading";

export const Home = () => {
    const [formData, setFormData] = useState({
        strategy: "",
    });
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedStrategyLabel, setSelectedStrategyLabel] = useState("");
    const options_strategy = [
        { label: "골든/데드", value: "backtesting_gd" },
        { label: "볼린저밴드", value: "backtesting_bb" },
        { label: "RSI, MFI, MACD 지표 이용", value: "backtesting_ind" },
        { label: "엔벨로프", value: "backtesting_env" },
        { label: "윌리엄스", value: "backtest_w" },
    ];

    const handleChange = async (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // 선택한 전략의 label 가져오기
        const selectedOption = options_strategy.find((option) => option.value === value);
        if (selectedOption) {
            setSelectedStrategyLabel(selectedOption.label); // 선택된 label 설정
        }

        if (value) {
            setLoading(true);
            try {
                const data = await getLastBack(value);
                setChartData(data);
            } catch (error) {
                console.error("Home handleChange error: ", error);
            } finally {
                setLoading(false);
            }
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
                            // chartData && (
                            //     <ChartBox
                            //         title={selectedStrategyLabel}
                            //         currency="₩"
                            //         price={chartData.price}
                            //         arrow={chartData.rate < 0 ? <ArrowDown /> : <ArrowUp />}
                            //         rate={chartData.rate}
                            //         chart={
                            //             <LineChart
                            //                 data={chartData.chart}
                            //                 dataKey="lowest" // 예시로 lowest 사용
                            //             />
                            //         }
                            //         sub="Compared to last month"
                            //     />
                            // )
                            <div>profit: {chartData.profit}</div>
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
