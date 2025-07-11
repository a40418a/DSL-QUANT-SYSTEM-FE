//볼린저밴드 전략페이지

import React, { useContext, useState } from "react";
import styles from "./strategy.module.css";
import { ColorBtn } from "../../../components/button/colorBtn/ColorBtn";
import { InputBox } from "../../../components/box/inputBox/InputBox";
import { StrategyBollingerDTO } from "../../../types/StrategyDTO";
import { StrategyContext } from "../../../context/StrategyContext";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";

export const StrategyBollinger = () => {
    const { setStrategyBolData } = useContext(StrategyContext);

    const initialFormDataBol = JSON.parse(localStorage.getItem("formDataBol")) || {
        move_period: [0, 0],
    };
    const [formDataBol, setFormDataBol] = useState(initialFormDataBol);

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
    };

    const handleSubmit = async () => {
        const SURL = import.meta.env.VITE_APP_URI;
        const strategyBolDTO = new StrategyBollingerDTO(formDataBol);
        // console.log(strategyBolDTO);
        setStrategyBolData(strategyBolDTO);

        try {
            const token = localStorage.getItem("jwt"); // JWT 토큰 가져오기
            const response = await axios.post(`${SURL}/strategy/bollinger`, strategyBolDTO, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // console.log('Response:', response.data);
        } catch (error) {
            console.error("There was an error submitting the common strategy!", error);
        }

        if (formDataBol.moveAvg) {
            localStorage.removeItem("formDataBol");
            navigate(`/result/${id}`);
        } else {
            alert("이동 평균 기간을 입력해주세요.");
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
            <div className={styles.btnWrapper} id="btn-to-result">
                <ColorBtn className={styles.btnPrev} text="< 이전" onClick={handlePrevClick} />
                <ColorBtn className={styles.btnNext} text="백테스트" onClick={handleSubmit} />
            </div>
        </div>
    );
};
