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

            if (name === 'fastMoveAvg' && parseFloat(value) < 0) {
                alert('입력값은 0보다 작을 수 없습니다.');
                return prevData;
            }

            if (name === 'slowMoveAvg' && parseFloat(value) < 0) {
                alert('입력값은 0보다 작을 수 없습니다.');
                return prevData;
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
                    <InputBox
                        type="number"
                        placeholder="빠른 이동 평균 기간을 입력하세요."
                        name="fastMoveAvg"
                        value={formData.fastMoveAvg}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="strategy-select">
                <div className="strategy-subtitle-wrapper">
                    <div className="strategy-subtitle">느린 이동 평균 기간</div>
                </div>
                <div className="strategy-input">
                    <InputBox
                        type="number"
                        placeholder="느린 이동 평균 기간을 입력하세요."
                        name="slowMoveAvg"
                        value={formData.slowMoveAvg}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="strategy-btn-wrapper" id="btn-to-result">
                <ColorBtn id="colorBtn-prev" text="< 이전" onClick={() => window.history.back()} />
                <ColorBtn id="colorBtn-next" text="백테스트" link="/result" onClick={handleSubmit} />
            </div>
        </div>
    );
};
