//공통전략설정 및 전략 선택 페이지

import React, { useContext, useState } from "react";
import styles from "./strategy.module.css";
import { ColorBtn } from "../../../components/button/colorBtn/ColorBtn";
import { InputBox } from "../../../components/box/inputBox/InputBox";
import { SelectBox } from "../../../components/box/selectBox/SelectBox";
import { StrategyCommonDTO } from "../../../types/StrategyDTO";
import { StrategyContext } from "../../../context/StrategyContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const StrategyMain = () => {
    const SURL = import.meta.env.VITE_APP_URI;
    const { setStrategyCommonData } = useContext(StrategyContext);
    const navigate = useNavigate();

    //컴포넌트가 로드될 때 localStroragedptj formlData를 가져옵니다.
    const initialFormData = JSON.parse(localStorage.getItem("formData")) || {
        initial_investment: 0,
        tax: 0.01,
        target_item: "",
        tick_kind: "",
        inq_range: 0,
        strategy: "",
    };

    const [formData, setFormData] = useState(initialFormData);

    const options_tax = [
        { label: "0.01%", value: "0.01" },
        { label: "0.02%", value: "0.02" },
        { label: "0.03%", value: "0.03" },
        { label: "0.04%", value: "0.04" },
        { label: "0.05%", value: "0.05" },
        { label: "0.06%", value: "0.06" },
        { label: "0.07%", value: "0.07" },
        { label: "0.08%", value: "0.08" },
        { label: "0.09%", value: "0.09" },
        { label: "0.1%", value: "0.1" },
    ];

    const options_candle = [
        { label: "1분", value: "1" },
        { label: "3분", value: "3" },
        { label: "5분", value: "5" },
        { label: "10분", value: "10" },
        { label: "15분", value: "15" },
        { label: "30분", value: "30" },
        { label: "60분", value: "60" },
        { label: "240분", value: "240" },
        { label: "1일", value: "D" },
        { label: "1주", value: "W" },
        { label: "1개월", value: "M" },
    ];

    const options_strategy = [
        { label: "골든/데드", value: "strategy/golden" },
        { label: "볼린저밴드", value: "strategy/bollinger" },
        { label: "RSI, MFI, MACD 지표 이용", value: "strategy/rsi" },
        { label: "엔벨로프", value: "strategy/env" },
        { label: "윌리엄스", value: "strategy/williams" },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => {
            const newFormData = { ...prevData, [name]: value };

            if (name === "initial_investment" && parseFloat(value) < 0) {
                alert("초기 투자 금액은 0보다 작을 수 없습니다.");
                return prevData;
            }

            if (name === "inq_range" && parseFloat(value) < 0) {
                alert("조회 범위는 0보다 작을 수 없습니다.");
                return prevData;
            }

            //변경된 formData를 localStorage에 저장합니다.
            localStorage.setItem("formData", JSON.stringify(newFormData));

            return newFormData;
        });
    };

    const handleSubmit = async () => {
        const currentTime = new Date();
        const year = currentTime.getFullYear();
        const month = String(currentTime.getMonth() + 1).padStart(2, "0");
        const day = String(currentTime.getDate()).padStart(2, "0");
        const hours = String(currentTime.getHours()).padStart(2, "0");
        const minutes = String(currentTime.getMinutes()).padStart(2, "0");
        const seconds = String(currentTime.getSeconds()).padStart(2, "0");

        const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        const formDataWithTime = {
            ...formData,
            backtesting_date: formattedDate,
        };
        const strategyCommonDTO = new StrategyCommonDTO(formDataWithTime);
        setStrategyCommonData(strategyCommonDTO);

        const token = localStorage.getItem("jwt"); // JWT 토큰 가져오기

        // 토큰이 없을 때 로그인 페이지로 리다이렉트
        if (!token) {
            alert("로그인 정보가 없습니다. 다시 로그인해주세요.");
            navigate("/login");
            return;
        }

        try {
            const response = await axios.post(`${SURL}/strategy`, strategyCommonDTO, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // 새로운 토큰이 있으면 업데이트
            const newToken =
                response.headers["Authorization"] ||
                response.headers["authorization"] ||
                response.headers["Authorization".toLowerCase()];

            if (newToken) {
                localStorage.setItem("jwt", newToken); // 새로운 토큰 저장
            }

            console.log("Response:", response.data);
        } catch (error) {
            console.error("전략 제출 중 오류 발생:", error);

            // 401 에러가 발생하면 로그인 페이지로 리다이렉트
            if (error.response && error.response.status === 401) {
                alert("로그인이 필요합니다. 다시 로그인해주세요.");
                localStorage.removeItem("jwt");
                navigate("/login");
            } else {
                alert("서버 오류가 발생했습니다. 다시 시도해주세요.");
            }
        }

        // 선택된 전략의 value 값을 가져옵니다.
        const selectedStrategy = formData.strategy;

        if (
            selectedStrategy &&
            formData.initial_investment &&
            formData.tax &&
            formData.target_item &&
            formData.tick_kind &&
            formData.inq_range
        ) {
            //제출 후 formData를 localStorage에서 삭제합니다.
            localStorage.removeItem("formData");
            navigate(`/${selectedStrategy}`);
        } else {
            alert("선택되지 않은 옵션이 있습니다\n모든 옵션을 선택해주세요");
        }
    };

    return (
        <div className={styles.strategy}>
            <div className={styles.title}>공통 변수 설정</div>
            <div className={styles.info}>
                해당 옵션에 대해서 잘 모르시겠다면 제목에 커서를 갖다두시면 설명해드립니다:)
            </div>
            <div className={styles.select}>
                <div className={styles.subtitle} title="주식 투자 시 처음으로 투입하는 자본">
                    초기 투자 금액
                </div>
                <div className={styles.input}>
                    <div className={styles.initInvestment}>
                        <InputBox
                            type="text"
                            placeholder="초기 투자 금액을 입력해주세요."
                            name="initial_investment"
                            value={formData.initial_investment}
                            onChange={handleChange}
                        />
                    </div>
                    <span>만원</span>
                </div>
            </div>
            <div className={styles.select}>
                <div className={styles.subtitle} title="주식을 매매할 때 증권사에 지불하는 비용">
                    거래 수수료
                </div>
                <div className={styles.input}>
                    <SelectBox
                        placeholder="거래 수수료를 선택해주세요."
                        options={options_tax}
                        name="tax"
                        value={formData.tax}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className={styles.select}>
                <div
                    className={styles.subtitle}
                    title="주식 시장에서 거래되는 특정 회사의 주식을 나타내는 고유한 이름"
                >
                    종목 이름(TargetItem)
                </div>
                <div className={styles.input}>
                    <InputBox
                        type="text"
                        placeholder="종목 이름을 정확히 입력하세요."
                        name="target_item"
                        value={formData.target_item}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className={styles.select}>
                <div className={styles.subtitle} title="대표적으로 양봉(상승)과 음봉(하락)">
                    캔들 종류(TickKind)
                </div>
                <div className={styles.input}>
                    <SelectBox
                        placeholder="캔들 종류를 선택해주세요."
                        options={options_candle}
                        name="tick_kind"
                        value={formData.tick_kind}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className={styles.select}>
                <div
                    className={styles.subtitle}
                    title="주식 데이터를 검색하거나 분석할 때 설정하는 기간 또는 범위"
                >
                    조회 범위(InqRange)
                </div>
                <div className={styles.input}>
                    <InputBox
                        type="text"
                        placeholder="조회 범위를 입력하세요."
                        name="inq_range"
                        value={formData.inq_range}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className={styles.titleStrategy}>전략 선택</div>
            <div className={styles.select}>
                <div className={styles.input}>
                    <SelectBox
                        placeholder="전략을 선택하세요."
                        options={options_strategy}
                        name="strategy"
                        value={formData.strategy}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className={styles.btnWrapper}>
                <ColorBtn className={styles.btnNext} text="세부 전략 선택" onClick={handleSubmit} />
            </div>
        </div>
    );
};
