//rsi, mfi, macd 지표 이용 전략 설정 페이지

import React, { useContext, useState } from 'react';
import './strategy.css';
import { ColorBtn } from '../../../components/button/colorBtn/ColorBtn';
import { InputBox } from '../../../components/box/inputBox/InputBox';
import { StrategyRsiDTO } from '../../../types/StrategyDTO';
import { StrategyContext } from '../../../context/StrategyContext';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

export const StrategyRSI = () => {
    const { setStrategy3Data } = useContext(StrategyContext);
    const [formData, setFormData] = useState({
        rsiPeriod: 0,
    });

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

            return newFormData;
        });
    };

    const handleSubmit = async () => {
        const strategy3DTO = new StrategyRsiDTO(formData);
        console.log(strategy3DTO);
        setStrategy3Data(strategy3DTO);

        try {
            const token = localStorage.getItem('jwt'); // JWT 토큰 가져오기
            const response = await axios.post('http://localhost:8080/strategy/rsi', strategy3DTO, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log('Response:', response.data);
        } catch (error) {
            console.error('There was an error submitting the common strategy!', error);
        }

        if (formData.rsiPeriod) {
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
        <div className="strategy">
            <div className="strategy-title">RSI, MFI, MACD 지표 이용 전략 설정 페이지</div>
            <div className="strategy-select">
                <div className="strategy-subtitle-wrapper">
                    <div className="strategy-subtitle">빠른 이동 평균 기간</div>
                </div>
                <div className="strategy-input">
                    <InputBox
                        type="text"
                        placeholder="RSI 기간을 입력하세요."
                        name="rsiPeriod"
                        value={formData.rsiPeriod}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="strategy-btn-wrapper" id="btn-to-result">
                <ColorBtn id="colorBtn-prev" text="< 이전" onClick={handlePrevClick} />
                <ColorBtn id="colorBtn-next" text="백테스트" onClick={handleSubmit} />
            </div>
        </div>
    );
};
