// 상단 참고 주식 자료 구조
import React, { useEffect, useState } from "react";
import styles from "./featuredInfo.module.css";
import { ArrowDown, ArrowUp } from "../emoticon/Arrow";
import { ChartBox } from "../box/chartBox/ChartBox";
import { LineChart } from "../chart/LineChart";
import { Loading } from "../loading/Loading";
import { getKosdaq } from "../../utils/kosdakApi";
import { getKospi } from "../../utils/kospiApi";
import { getKospi200 } from "../../utils/kospi200Api";

export const FeaturedInfo = () => {
    //API를 통해 받아온 데이터를 저장
    const [kospi, setKospi] = useState(null);
    const [kosdaq, setKosdaq] = useState(null);
    const [kospi200, setKospi200] = useState(null);

    //API를 통해 데이터를 받아오는 함수
    useEffect(() => {
        const fetchData = async () => {
            try {
                const kospiData = await getKospi();
                setKospi(kospiData);

                const kosdaqData = await getKosdaq();
                setKosdaq(kosdaqData);

                const kospi200Data = await getKospi200();
                setKospi200(kospi200Data);
            } catch (error) {
                console.error("FeaturedInfo fetchData error: ", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className={styles.featuredInfo}>
            <div className={styles.box}>
                {!kosdaq ? (
                    <Loading />
                ) : (
                    <ChartBox
                        title="코스닥"
                        currency="₩"
                        price={kosdaq[kosdaq.length - 1]?.closingPrice}
                        arrow={
                            kosdaq[kosdaq.length - 1]?.fluctuatingRate >= 0 ? (
                                <ArrowUp />
                            ) : (
                                <ArrowDown />
                            )
                        }
                        rate={kosdaq[kosdaq.length - 1]?.fluctuatingRate}
                        chart={kosdaq.map((item) => ({
                            close: item.closingPrice,
                            date: item.date,
                        }))}
                        sub="Compared to last month"
                    />
                )}
            </div>
            <div className={styles.box}>
                {!kospi ? (
                    <Loading />
                ) : (
                    <ChartBox
                        title="코스피"
                        currency="₩"
                        price={kospi[kospi.length - 1]?.closingPrice}
                        arrow={
                            kospi[kospi.length - 1]?.fluctuatingRate >= 0 ? (
                                <ArrowUp />
                            ) : (
                                <ArrowDown />
                            )
                        }
                        rate={kospi[kospi.length - 1]?.fluctuatingRate}
                        chart={kospi.map((item) => ({
                            close: item.closingPrice,
                            date: item.date,
                        }))}
                        sub="Compared to last month"
                    />
                )}
            </div>

            <div className={styles.box}>
                {!kospi200 ? (
                    <Loading />
                ) : (
                    <ChartBox
                        title="코스피200"
                        currency="₩"
                        price={kospi200[kospi200.length - 1]?.closingPrice}
                        arrow={
                            kospi200[kospi200.length - 1]?.fluctuatingRate >= 0 ? (
                                <ArrowUp />
                            ) : (
                                <ArrowDown />
                            )
                        }
                        rate={kospi200[kospi200.length - 1]?.fluctuatingRate}
                        chart={kospi200.map((item) => ({
                            close: item.closingPrice,
                            date: item.date,
                        }))}
                        sub="Compared to last month"
                    />
                )}
            </div>
        </div>
    );
};
