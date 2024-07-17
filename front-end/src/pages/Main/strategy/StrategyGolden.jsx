import React, { useContext, useState } from 'react';
import './strategy.css';
import { ColorBtn } from '../../../components/button/ColorBtn/ColorBtn';
import { InputBox, InputHalfBox } from '../../../components/box/inputBox/InputBox';
import { Strategy1DTO } from '../../../dto/StrategyDTO';
import { StrategyContext } from '../../../context/StrategyContext';

export const Strategy1 = () => {
    const { setStrategy1Data } = useContext(StrategyContext);
    const [formData, setFormData] = useState({
        //골든
        fast_period: [0, 0],
        slow_period: [0, 0],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => {
            const newFormData = { ...prevData, [name]: value };

            // 종료일이 시작일보다 빠른지 확인
            if (
                name === 'fastMoveAvgEnd' &&
                newFormData.fastMoveAvgStart &&
                new Date(value) < new Date(newFormData.fastMoveAvgStart)
            ) {
                alert('종료일은 시작일보다 빠를 수 없습니다.');
                return prevData; // 이전 데이터로 되돌리기
            }

            // 종료일이 시작일보다 빠른지 확인
            if (
                name === 'slowMoveAvgEnd' &&
                newFormData.slowMoveAvgStart &&
                new Date(value) < new Date(newFormData.slowMoveAvgStart)
            ) {
                alert('종료일은 시작일보다 빠를 수 없습니다.');
                return prevData; // 이전 데이터로 되돌리기
            }

            return newFormData;
        });
    };

    const handleSubmit = () => {
        const strategy1DTO = new Strategy1DTO(formData);
        console.log(strategy1DTO);
        setStrategy1Data(strategy1DTO);
    };

    return (
        <div className="strategy">
            <div className="strategy-title">골든/데드 전략 설정 페이지</div>
            <div className="strategy-select">
                <div className="strategy-subtitle-wrapper">
                    <div className="strategy-subtitle">빠른 이동 평균 기간</div>
                </div>
                <div className="strategy-input">
                    <div className="half-input-wrapper">
                        <div className="strategy-subtitle-date">시작일 설정</div>
                        <InputHalfBox
                            type="date"
                            name="fastMoveAvgStart"
                            value={formData.fastMoveAvgStart}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="half-input-wrapper">
                        <div className="strategy-subtitle-date">종료일 설정</div>
                        <InputHalfBox
                            type="date"
                            name="fastMoveAvgEnd"
                            value={formData.fastMoveAvgEnd}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="strategy-select">
                <div className="strategy-subtitle-wrapper">
                    <div className="strategy-subtitle">느린 이동 평균 기간</div>
                </div>
                <div className="strategy-input">
                    <div className="half-input-wrapper">
                        <div className="strategy-subtitle-date">시작일 설정</div>
                        <InputBox
                            type="date"
                            name="slowMoveAvgStart"
                            value={formData.slowMoveAvgStart}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="half-input-wrapper">
                        <div className="strategy-subtitle-date">종료일 설정</div>
                        <InputBox
                            type="date"
                            name="slowMoveAvgEnd"
                            value={formData.slowMoveAvgEnd}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="strategy-btn-wrapper" id="btn-to-result">
                <ColorBtn id="colorBtn-prev" text="< 이전" onClick={() => window.history.back()} />
                <ColorBtn id="colorBtn-next" text="백테스트" link="/result" onClick={handleSubmit} />
            </div>
        </div>
    );
};
