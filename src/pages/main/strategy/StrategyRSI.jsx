//rsi, mfi, macd 지표 이용 전략 설정 페이지

import React, { useContext, useState } from 'react';
import styles from './strategy.module.css';
import { ColorBtn } from '../../../components/button/colorBtn/ColorBtn';
import { InputBox } from '../../../components/box/inputBox/InputBox';
import { StrategyRsiDTO } from '../../../types/StrategyDTO';
import { StrategyContext } from '../../../context/StrategyContext';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

export const StrategyRSI = () => {
    const { setStrategy3Data } = useContext(StrategyContext);
    const initialFormData = JSON.parse(localStorage.getItem('formData')) || {
        rsiPeriod: 0,
    };
    const [formData, setFormData] = useState(initialFormData);

    const navigate = useNavigate();
    const location = useLocation();

    // 현재 경로에서 숫자 부분 추출
    const pathSegments = location.pathname.split('/');
    const id = pathSegments[pathSegments.length - 1]; // 경로의 마지막 부분이 ID

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => {
            const newFormData = { ...prevData, [name]: Number(value) };

            if (name === 'rsiPeriod' && parseFloat(value) < 0) {
                alert('입력값은 0보다 작을 수 없습니다.');
                return prevData;
            }

            localStorage.setItem('formData', JSON.stringify(newFormData));

            return newFormData;
        });
    };

    const handleSubmit = async () => {
        const SURL = import.meta.env.VITE_APP_URI;
        const strategy3DTO = new StrategyRsiDTO(formData);
        // console.log(strategy3DTO);
        setStrategy3Data(strategy3DTO);

        try {
            const token = localStorage.getItem('jwt'); // JWT 토큰 가져오기
            const response = await axios.post(`${SURL}/strategy/rsi`, strategy3DTO, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // console.log('Response:', response.data);
        } catch (error) {
            console.error('There was an error submitting the common strategy!', error);
        }

        if (formData.rsiPeriod) {
            localStorage.removeItem('formData');
            navigate(`/result/${id}`);
        } else {
            if (!formData.rsiPeriod) {
                alert('RSI 계산을 위한 시작일과 종료일을 입력해주세요.');
            }
        }
    };

    const handlePrevClick = () => {
        navigate('/strategy');
    };

    return (
        <div className={styles.strategy}>
            <div
                className={styles.title}
                title="각각의 기술적 지표를 조합하여 매매 신호를 찾는 방법"
            >
                RSI, MFI, MACD 지표 이용 전략 설정 페이지
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
                        value={formData.rsiPeriod}
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
