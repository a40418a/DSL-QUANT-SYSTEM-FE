//볼린저밴드+엔벨로프 전략페이지

import React, { useContext, useState } from "react";
import styles from "../strategy.module.css";
import { ColorBtn } from "../../../../components/button/colorBtn/ColorBtn";
import { InputBox } from "../../../../components/box/inputBox/InputBox";
import { StrategyRsiDTO, StrategyWDTO } from "../../../../types/StrategyDTO";
import { StrategyContext } from "../../../../context/StrategyContext";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";

export const StrategyRW = () => {
    const { setStrategyRsiData } = useContext(StrategyContext);
    const { setStrategyWilData } = useContext(StrategyContext);

    const initialFormDataRsi = JSON.parse(localStorage.getItem("formDataRsi")) || {
        rsiPeriod: 0,
    };
    const initialFormDataWil = JSON.parse(localStorage.getItem("formDataWil")) || {
        williamsPeriod: 0,
    };
    const [formDataRsi, setFormDataRsi] = useState(initialFormDataRsi);
    const [formDataWil, setFormDataWil] = useState(initialFormDataWil);

    const navigate = useNavigate();
    const location = useLocation();

    // strategy/ 이후의 경로를 모두 ID로 추출
    const pathSegments = location.pathname.split("/strategy/");
    const id = pathSegments[1]; // 'strategy/' 이후의 모든 부분이 ID

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDataRsi((prevData) => {
            const newFormDataRsi = { ...prevData, [name]: Number(value) };

            if (name === "rsiPeriod" && parseFloat(value) < 0) {
                alert("입력값은 0보다 작을 수 없습니다.");
                return prevData;
            }

            localStorage.setItem("formDataRsi", JSON.stringify(newFormDataRsi));

            return newFormDataRsi;
        });
        setFormDataWil((prevData) => {
            const newFormDataWil = { ...prevData, [name]: Number(value) };

            if (name === "williamsPeriod" && parseFloat(value) < 0) {
                alert("입력값은 0보다 작을 수 없습니다.");
                return prevData;
            }

            localStorage.setItem("formDataWil", JSON.stringify(newFormDataWil));

            return newFormDataWil;
        });
    };

    const handleSubmit = async () => {
        const SURL = import.meta.env.VITE_APP_URI;
        const strategyRsiDTO = new StrategyRsiDTO(formDataRsi);
        const multiStrategyDTO= {
            williamsPeriod: formDataWil.williamsPeriod,
        };
        try {
            const token = localStorage.getItem("jwt"); // JWT 토큰 가져오기
            await axios.post(`${SURL}/strategy/rsi/williams`, {
                rsiStrategyDTO: strategyRsiDTO, // 첫 번째 전략 (볼린저밴드)
                multiStrategyDTO: multiStrategyDTO // 골든크로스 전략 관련 정보만 포함된 DTO
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } catch (error) {
            console.error("There was an error submitting the common strategy!", error);
        }

        if (formDataRsi.rsiPeriod && formDataWil.williamsPeriod) {
            localStorage.removeItem("formDataRsi");
            localStorage.removeItem("formDataWil");
            navigate(`/multi_result/${id}`);
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
                title="각각의 기술적 지표를 조합하여 매매 신호를 찾는 방법"
            >
                RSI, MFI, MACD 지표 이용 전략 설정
            </div>
            <div className={styles.info}>
                해당 옵션에 대해서 잘 모르시겠다면 제목에 커서를 갖다두시면 설명해드립니다:)
            </div>
            <div className={styles.select}>
                <div
                    className={styles.subtitle}
                    title="주식의 단기 가격 변동을 반영하기 위해 짧은 기간(예: 5일, 10일 등) 동안의 평균 가격을 계산하는 데 사용되는 기간"
                >
                    빠른 이동 평균 기간
                </div>
                <div className={styles.input}>
                    <InputBox
                        type="text"
                        placeholder="RSI 기간을 입력하세요."
                        name="rsiPeriod"
                        value={formDataRsi.rsiPeriod}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div
                className={styles.title}
                title="시장의 과매도 및 과매수 상태를 판단하기 위해 사용되는 기술적 분석 지표"
            >
                Williams 지표 이용 전략 설정
            </div>
            <div className={styles.select}>
                <div
                    className={styles.subtitle}
                    title="주식의 단기 가격 변동을 반영하기 위해 짧은 기간(예: 5일, 10일 등) 동안의 평균 가격을 계산하는 데 사용되는 기간"
                >
                    빠른 이동 평균 기간
                </div>
                <div className={styles.input}>
                    <InputBox
                        type="text"
                        placeholder="Williams 기간을 입력하세요."
                        name="williamsPeriod"
                        value={formDataWil.williamsPeriod}
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
