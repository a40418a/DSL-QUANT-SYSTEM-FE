//볼린저밴드+엔벨로프 전략페이지

import React, { useContext, useState } from "react";
import styles from "../strategy.module.css";
import { ColorBtn } from "../../../../components/button/colorBtn/ColorBtn";
import { InputBox } from "../../../../components/box/inputBox/InputBox";
import { StrategyBollingerDTO, StrategyEnvDTO } from "../../../../types/StrategyDTO";
import { StrategyContext } from "../../../../context/StrategyContext";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";

export const StrategyBE = () => {
    const { setStrategyBolData } = useContext(StrategyContext);
    const { setStrategyEnvData } = useContext(StrategyContext);

    const initialFormDataBol = JSON.parse(localStorage.getItem("formDataBol")) || {
        move_period: [0, 0],
    };
    const initialFormDataEnv = JSON.parse(localStorage.getItem("formDataEnv")) || {
        moving_up: 1,
        moving_down: 1,
        movingAveragePeriod: 20,
    };
    const [formDataBol, setFormDataBol] = useState(initialFormDataBol);
    const [formDataEnv, setFormDataEnv] = useState(initialFormDataEnv);

    const navigate = useNavigate();
    const location = useLocation();

    // strategy/ 이후의 경로를 모두 ID로 추출
    const pathSegments = location.pathname.split("/strategy/");
    const id = pathSegments[1]; // 'strategy/' 이후의 모든 부분이 ID

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDataBol((prevData) => {
            const newFormDataBol = { ...prevData, [name]: value };

            if (name === "moveAvg" && parseFloat(value) < 0) {
                alert("입력값은 0보다 작을 수 없습니다.");
                return prevData;
            }

            localStorage.setItem("formDataBol", JSON.stringify(newFormDataBol));

            return newFormDataBol;
        });
        setFormDataEnv((prevData) => {
            const newFormDataEnv = { ...prevData, [name]: value };

            if (name === "moving_up" && parseFloat(value) < 0) {
                alert("입력값은 0보다 작을 수 없습니다.");
                return prevData;
            }

            if (name === "moving_down" && parseFloat(value) < 0) {
                alert("입력값은 0보다 작을 수 없습니다.");
                return prevData;
            }

            if (name === "movingAveragePeriod" && parseFloat(value) < 0) {
                alert("입력값은 0보다 작을 수 없습니다.");
                return prevData;
            }

            localStorage.setItem("formDataEnv", JSON.stringify(newFormDataEnv));

            return newFormDataEnv;
        });
    };

    const handleSubmit = async () => {
        const SURL = import.meta.env.VITE_APP_URI;
        const strategyBolDTO = new StrategyBollingerDTO(formDataBol);
        const strategyEnvDTO = new StrategyEnvDTO(formDataEnv);
        setStrategyBolData(strategyBolDTO);
        setStrategyEnvData(strategyEnvDTO);

        try {
            const token = localStorage.getItem("jwt"); // JWT 토큰 가져오기
            await axios.post(`${SURL}/strategy/bollinger`, strategyBolDTO, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            await axios.post(`${SURL}/strategy/env`, strategyEnvDTO, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } catch (error) {
            console.error("There was an error submitting the common strategy!", error);
        }

        if (
            formDataBol.moveAvg &&
            formDataEnv.moving_up &&
            formDataEnv.moving_down &&
            formDataEnv.movingAveragePeriod
        ) {
            localStorage.removeItem("formDataBol");
            localStorage.removeItem("formDataEnv");
            navigate(`/result/${id}`);
        } else {
            alert("선택되지 않은 옵션이 있습니다\n모든 옵션을 선택해주세요");
        }
    };

    const handlePrevClick = () => {
        navigate("/strategy");
    };

    return (
        <div className={styles.strategy}>
            <div
                className={styles.title}
                title="주가의 변동성을 기준으로 상한선과 하한선을 설정하여, 주가가 밴드의 상한선에 가까울 때는 과매수, 하한선에 가까울 때는 과매도를 판단해 매매하는 전략"
            >
                볼린저밴드 전략 설정 페이지
            </div>
            <div className={styles.info}>
                해당 옵션에 대해서 잘 모르시겠다면 제목에 커서를 갖다두시면 설명해드립니다:)
            </div>
            <div className={styles.select}>
                <div
                    className={styles.subtitle}
                    title="주식의 평균 가격을 계산할 때 사용하는 일정 기간을 의미하며, 보통 단기(5일), 중기(20일), 장기(60일) 등으로 구분"
                >
                    이동 평균 기간
                </div>

                <div className={styles.input}>
                    <InputBox
                        type="text"
                        placeholder="이동 평균 기간을 입력하세요."
                        name="moveAvg"
                        value={formDataBol.moveAvg}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div
                className={styles.title}
                title="주가의 이동평균선을 기준으로 일정 비율 위아래에 밴드를 설정해, 주가가 상단 밴드에 도달하면 매도하고, 하단 밴드에 도달하면 매수하는 추세 추종 전략"
            >
                엔벨로프 전략 설정 페이지
            </div>
            <div className={styles.select}>
                <div
                    className={styles.subtitle}
                    title="주가의 이동 평균선에서 상단 밴드까지의 거리를 나타내며, 주가의 변동성을 측정하는 데 사용"
                >
                    상단 폭 값
                </div>
                <div className={styles.input}>
                    <InputBox
                        type="text"
                        placeholder="상단폭 값을 입력해주세요(기본값 1)"
                        name="moving_up"
                        value={formDataEnv.moving_up}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className={styles.select}>
                <div
                    className={styles.subtitle}
                    title="주가의 이동 평균선에서 하단 밴드까지의 거리를 나타내며, 주가의 변동성을 측정하는 데 사용"
                >
                    하단 폭 값
                </div>
                <div className={styles.input}>
                    <InputBox
                        type="text"
                        placeholder="하단폭 값을 입력해주세요(기본값 1)"
                        name="moving_down"
                        value={formDataEnv.moving_down}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className={styles.select}>
                <div
                    className={styles.subtitle}
                    title="주식 분석에서 특정 지표나 전략을 계산할 때 사용하는 시간 범위"
                >
                    기간 값
                </div>
                <div className={styles.input}>
                    <InputBox
                        type="text"
                        placeholder="기간 값을 입력해주세요(기본값 20)"
                        name="movingAveragePeriod"
                        value={formDataEnv.movingAveragePeriod}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className={styles.btnWrapper}>
                <ColorBtn className={styles.btnPrev} text="< 이전" onClick={handlePrevClick} />
                <ColorBtn className={styles.btnNext} text="백테스트" onClick={handleSubmit} />
            </div>
        </div>
    );
};
