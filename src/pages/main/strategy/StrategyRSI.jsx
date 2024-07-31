//rsi, mfi, macd 지표 이용 전략 설정 페이지

import React, { useContext, useState } from 'react';
import './strategy.css';
import { ColorBtn } from '../../../components/button/ColorBtn/ColorBtn';
import { InputBox } from '../../../components/box/inputBox/InputBox';
import { Strategy3DTO } from '../../../types/StrategyDTO';
import { StrategyContext } from '../../../context/StrategyContext';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

export const StrategyRSI = () => {
    const { setStrategy3Data } = useContext(StrategyContext);
    const [formData, setFormData] = useState({
        rsi_period: [0, 0],
        mfi_count: 0,
    });

    const navigate = useNavigate();
    const location = useLocation();

    // 현재 경로에서 숫자 부분 추출
    const pathSegments = location.pathname.split('/');
    const id = pathSegments[pathSegments.length - 1]; // 경로의 마지막 부분이 ID

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => {
            const newFormData = { ...prevData, [name]: value };

            // 종료일이 시작일보다 빠른지 확인
            if (name === 'rsiEnd' && newFormData.rsiStart && new Date(value) < new Date(newFormData.rsiStart)) {
                alert('종료일은 시작일보다 빠를 수 없습니다.');
                return prevData; // 이전 데이터로 되돌리기
            }

            // 반복 계산 횟수 조건 확인
            if (name === 'mfiLoopCount' && parseFloat(value) < 0) {
                alert('반복 계산횟수는 0보다 작을 수 없습니다.');
                return prevData; // 이전 데이터로 되돌리기
            }

            return newFormData;
        });
    };

    const handleSubmit = () => {
        const strategy3DTO = new Strategy3DTO(formData);
        console.log(strategy3DTO);
        setStrategy3Data(strategy3DTO);
        navigate(`/result/${id}`);
    };

    return (
        <div className="strategy">
            <div className="strategy-title">RSI, MFI, MACD 지표 이용 전략 설정 페이지</div>
            <div className="strategy-select">
                <div className="strategy-subtitle-wrapper">
                    <div className="strategy-subtitle">RSI 계산을 위한 기간(period)</div>
                </div>
                <div className="strategy-input">
                    <div className="half-input-wrapper">
                        <div className=" strategy-subtitle-date">시작일 설정</div>
                        <InputBox type="date" name="rsiStart" value={formData.rsiStart} onChange={handleChange} />
                    </div>
                    <div className="half-input-wrapper">
                        <div className=" strategy-subtitle-date">종료일 설정</div>
                        <InputBox type="date" name="rsiEnd" value={formData.rsiEnd} onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className="strategy-select">
                <div className="strategy-subtitle-wrapper">
                    <div className="strategy-subtitle">반복 계산 횟수(loopCount)</div>
                </div>
                <div className="strategy-input">
                    <InputBox
                        type="number"
                        placeholder="MFI 반복 계산 횟수를 입력하세요"
                        name="mfiLoopCount"
                        value={formData.mfiLoopCount}
                        onChange={handleChange}
                    />
                    <span>회</span>
                </div>
            </div>
            <div className="strategy-select">
                <div className="strategy-subtitle-wrapper">
                    <div className="strategy-subtitle">MACD</div>
                </div>
            </div>

            <div className="strategy-btn-wrapper" id="btn-to-result">
                <ColorBtn id="colorBtn-prev" text="< 이전" onClick={() => window.history.back()} />
                <ColorBtn id="colorBtn-next" text="백테스트" onClick={handleSubmit} />
            </div>
        </div>
    );
};
