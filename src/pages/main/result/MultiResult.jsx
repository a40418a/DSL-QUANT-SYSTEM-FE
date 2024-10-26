import React, { useContext, useEffect, useState } from "react";
import styles from "./result.module.css";
import { StrategyContext } from "../../../context/StrategyContext";
import { useParams } from "react-router-dom";
import { getUserInfo } from "../../../utils/userApi";
import { Loading } from "../../../components/loading/Loading";

export const MultiResult = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const {
        strategyCommonData,
        multiStrategyData,
        resultData,
        setResultData,
    } = useContext(StrategyContext);
    const strategyGolData={
        fastMoveAvg: resultData.fastMoveAvg,
        slowMoveAvg: resultData.slowMoveAvg,
    }
    const strategyBolData={
        moveAvg: resultData.moveAvg,
    }
    const strategyRsiData={
        rsiPeriod: resultData.rsiPeriod,
    }
    const strategyEnvData={
        move_up: resultData.move_up,
        move_down: resultData.move_down,
        movingAveragePeriod: resultData.movingAveragePeriod,
    }
    const strategyWilData={
        williamsPeriod: resultData.williamsPeriod,
    }
    const finalData={
        profitVsRate: resultData.profitVsRate,
        finalProfitRate: resultData.finalProfitRate,
    }
    const { id } = useParams();
    const SURL = import.meta.env.VITE_APP_URI;

    useEffect(() => {
        const token = localStorage.getItem("jwt");

        const fetchData = async () => {
            try {
                const userInfoData = await getUserInfo();
                setUserInfo(userInfoData);
            } catch (error) {
                console.error("Result fetchData error: ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();

        fetch(`${SURL}/multi_result/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("네트워크 응답이 올바르지 않습니다.");
                }
                return response.json();
            })
            .then((data) => {
                setResultData(data);
            })
            .catch((error) => {
                console.error("백엔드에서 결과 데이터를 가져오는 중 오류가 발생했습니다:", error);
            });
    }, [id]);

    if (loading || !userInfo) {
        return <Loading />;
    }

    // HTML 콘텐츠를 저장하는 함수
    const saveHtml = () => {
        const style = document.createElement("style");
        style.type = "text/css";
        style.innerHTML = `
            * {
                pointer-events: none !important;
                user-select: none !important;
            }
        `;
        document.head.appendChild(style);

        const htmlContent = document.documentElement.outerHTML;
        const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
        const filename = `result_${timestamp}.html`;

        const blob = new Blob([htmlContent], { type: "text/html" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        document.head.removeChild(style);
    };

    return (
        <div className={styles.result}>
            <div className={styles.title}>
                <div className={styles.name}>{userInfo.name}</div>
                <div className={styles.sub}>님의 전략선택옵션</div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.infoTitle}>공통 전략 데이터</div>
                <table className={styles.table}>
                    <tbody>
                    {Object.entries(strategyCommonData)
                        .filter(([key]) => key !== "strategy") // "strategy" 항목 제외
                        .map(([key, value]) => (
                            <tr key={key}>
                                <th>{key}</th>
                                <td>{JSON.stringify(value)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className={styles.infoTitle}>
                    선택 전략 <p>{resultData.strategy}</p> 데이터
                </div>
                <table className={styles.table}>
                    <tbody>
                    {resultData.strategy === "golden" &&
                        Object.entries(strategyGolData).map(([key, value]) => (
                            <tr key={key}>
                                <th>{key}</th>
                                <td>{JSON.stringify(value)}</td>
                            </tr>
                        ))}
                    {resultData.strategy === "bollinger" &&
                        Object.entries(strategyBolData).map(([key, value]) => (
                            <tr key={key}>
                                <th>{key}</th>
                                <td>{JSON.stringify(value)}</td>
                            </tr>
                        ))}
                    {resultData.strategy === "rsi" &&
                        Object.entries(strategyRsiData).map(([key, value]) => (
                            <tr key={key}>
                                <th>{key}</th>
                                <td>{JSON.stringify(value)}</td>
                            </tr>
                        ))}
                    {resultData.strategy === "env" &&
                        Object.entries(strategyEnvData).map(([key, value]) => (
                            <tr key={key}>
                                <th>{key}</th>
                                <td>{JSON.stringify(value)}</td>
                            </tr>
                        ))}
                    {resultData.strategy === "williams" &&
                        Object.entries(strategyWilData).map(([key, value]) => (
                            <tr key={key}>
                                <th>{key}</th>
                                <td>{JSON.stringify(value)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className={styles.infoTitle}>
                    선택 전략 <p>{resultData.second_strategy}</p> 데이터
                </div>
                <table className={styles.table}>
                    <tbody>
                    {resultData.second_strategy === "golden" &&
                        Object.entries(strategyGolData).map(([key, value]) => (
                            <tr key={key}>
                                <th>{key}</th>
                                <td>{JSON.stringify(value)}</td>
                            </tr>
                        ))}
                    {resultData.second_strategy === "bollinger" &&
                        Object.entries(strategyBolData).map(([key, value]) => (
                            <tr key={key}>
                                <th>{key}</th>
                                <td>{JSON.stringify(value)}</td>
                            </tr>
                        ))}
                    {resultData.second_strategy === "rsi" &&
                        Object.entries(strategyRsiData).map(([key, value]) => (
                            <tr key={key}>
                                <th>{key}</th>
                                <td>{JSON.stringify(value)}</td>
                            </tr>
                        ))}
                    {resultData.second_strategy === "env" &&
                        Object.entries(strategyEnvData).map(([key, value]) => (
                            <tr key={key}>
                                <th>{key}</th>
                                <td>{JSON.stringify(value)}</td>
                            </tr>
                        ))}
                    {resultData.second_strategy === "williams" &&
                        Object.entries(strategyWilData).map(([key, value]) => (
                            <tr key={key}>
                                <th>{key}</th>
                                <td>{JSON.stringify(value)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={styles.title}>
                <div className={styles.name}>{userInfo.name}</div>
                <div className={styles.sub}>님의 백테스팅 결과</div>
            </div>

            {/* 복수 전략 결과 표시 */}
            <div className={styles.wrapper}>
                <div className={styles.wrapper2}>
                <div className={styles.tableContainer}>
                <div className={styles.infoTitle}>전략 1 결과 ({resultData.strategy})</div>
                <table className={styles.table}>
                    <tbody>
                    <tr>
                        <th>Final Cash</th>
                        <td>{resultData?.finalCash != null ? resultData.finalCash.toFixed(2) : <Loading />}</td>
                    </tr>
                    <tr>
                        <th>Final Asset</th>
                        <td>{resultData?.finalAsset != null ? resultData.finalAsset.toFixed(2) : <Loading />}</td>
                    </tr>
                    <tr>
                        <th>Final Balance</th>
                        <td>{resultData?.finalBalance != null ? resultData.finalBalance.toFixed(2) : <Loading />}</td>
                    </tr>
                    <tr>
                        <th>Profit</th>
                        <td>{resultData?.profit != null ? resultData.profit.toFixed(2) : <Loading />}</td>
                    </tr>
                    <tr>
                        <th>Profit Rate</th>
                        <td>{resultData?.profitRate != null ? resultData.profitRate.toFixed(2) : <Loading />}</td>
                    </tr>
                    <tr>
                        <th>Number of Trades</th>
                        <td>{resultData?.numberOfTrades != null ? resultData.numberOfTrades.toFixed(2) :
                            <Loading />}</td>
                    </tr>
                    </tbody>
                </table>
                </div>
                <div className={styles.tableContainer}>
                    <div className={styles.infoTitle}>전략 2 결과 ({resultData.second_strategy})</div>
                    <table className={styles.table}>
                        <tbody>
                        <tr>
                            <th>Final Cash</th>
                            <td>{resultData?.second_finalCash != null ? resultData.second_finalCash.toFixed(2) :
                                <Loading />}</td>
                        </tr>
                        <tr>
                            <th>Final Asset</th>
                            <td>{resultData?.second_finalAsset != null ? resultData.second_finalAsset.toFixed(2) :
                                <Loading />}</td>
                        </tr>
                        <tr>
                            <th>Final Balance</th>
                            <td>{resultData?.second_finalBalance != null ? resultData.second_finalBalance.toFixed(2) :
                                <Loading />}</td>
                        </tr>
                        <tr>
                            <th>Profit</th>
                            <td>{resultData?.second_profit != null ? resultData.second_profit.toFixed(2) : <Loading />}</td>
                        </tr>
                        <tr>
                            <th>Profit Rate</th>
                            <td>{resultData?.second_profitRate != null ? resultData.second_profitRate.toFixed(2) :
                                <Loading />}</td>
                        </tr>
                        <tr>
                            <th>Number of Trades</th>
                            <td>{resultData?.second_numberOfTrades != null ? resultData.second_numberOfTrades.toFixed(2) :
                                <Loading />}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
                <div className={styles.wrapper}>
                    <div className={styles.infoTitle}>최종 결과</div>
                    <table className={styles.table}>
                        <tbody>
                        {Object.entries(finalData).map(([key, value]) => (
                                <tr key={key}>
                                    <th>{key}</th>
                                    <td>{JSON.stringify(value)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={styles.box}>
                <div>
                    해당 분석 결과를 추후에도 확인하고 싶다면 아래의 html로 저장하기 버튼을 눌러주세요
                </div>
                <div>파일 분석 팁💡💡</div>
                <div className={styles.download} onClick={saveHtml}>
                    HTML로 저장하기
                </div>
            </div>
        </div>
    );
};
