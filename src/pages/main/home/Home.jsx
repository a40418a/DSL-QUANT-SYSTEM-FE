import React, { useState, useEffect } from "react";
import { FeaturedInfo } from "../../../components/featuredInfo/FeaturedInfo";
import styles from "./home.module.css";
import { HorizonTableTop20 } from "../../../components/table/horizonTable/HorizonTable";
import { ArrowDown, ArrowUp } from "../../../components/emoticon/Arrow";
import { ChartBox } from "../../../components/box/chartBox/ChartBox";
import { LineChart } from "../../../components/chart/LineChart";
import { SelectBox } from "../../../components/box/selectBox/SelectBox";

export const Home = () => {
    const [formData, setFormData] = useState({
        strategy: "",
    });
    const options_strategy = [
        { label: "골든/데드", value: "strategy/golden" },
        { label: "볼린저밴드", value: "strategy/bollinger" },
        { label: "RSI, MFI, MACD 지표 이용", value: "strategy/rsi" },
        { label: "엔벨로프", value: "strategy/env" },
        { label: "윌리엄스", value: "strategy/williams" },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className={styles.home}>
            <FeaturedInfo />
            <div className={styles.wrapper}>
                <div className={styles.backTest}>
                    <div className={styles.title}>가장 최근에 진행한 백테스팅</div>
                    <SelectBox
                        placeholder="전략을 선택하세요."
                        options={options_strategy}
                        name="strategy"
                        value={formData.strategy}
                        onChange={handleChange}
                    />
                    <div className={styles.backChart}>
                        <ChartBox
                            title="최근 주식 종목"
                            currency="₩"
                            price="73,700"
                            arrow={<ArrowDown />}
                            rate="-1"
                            // chart={<LineChart data={userData01} dataKey="lowest" />}
                            sub="Compared to last month"
                        />
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
