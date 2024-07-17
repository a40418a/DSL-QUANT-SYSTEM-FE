import React, { useContext, useState } from 'react';
import './strategy.css';
import { ColorBtn } from '../../../components/button/ColorBtn/ColorBtn';
import { InputBox } from '../../../components/box/inputBox/InputBox';
import { Strategy2DTO } from '../../../dto/StrategyDTO';
import { StrategyContext } from '../../../context/StrategyContext';

export const Strategy2 = () => {
    const { setStrategy2Data } = useContext(StrategyContext);
    const [formData, setFormData] = useState({
        move_period: [0, 0],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => {
            const newFormData = { ...prevData, [name]: value };

            // 종료일이 시작일보다 빠른지 확인
            if (
                name === 'moveAvgEnd' &&
                newFormData.moveAvgStart &&
                new Date(value) < new Date(newFormData.moveAvgStart)
            ) {
                alert('종료일은 시작일보다 빠를 수 없습니다.');
                return prevData; // 이전 데이터로 되돌리기
            }

            return newFormData;
        });
    };

    const handleSubmit = () => {
        const strategy2DTO = new Strategy2DTO(formData);
        console.log(strategy2DTO);
        setStrategy2Data(strategy2DTO);
    };

    return (
        <div className="strategy">
            <div className="strategy-title">볼린저밴드 전략 설정 페이지</div>
            <div className="strategy-select">
                <div className="strategy-subtitle-wrapper">
                    <div className="strategy-subtitle">이동 평균 기간</div>
                </div>
                <div className="strategy-input">
                    <div className="half-input-wrapper">
                        <div className="strategy-subtitle-date">시작일 설정</div>
                        <InputBox
                            type="date"
                            name="moveAvgStart"
                            value={formData.moveAvgStart}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="half-input-wrapper">
                        <div className="strategy-subtitle-date">종료일 설정</div>
                        <InputBox type="date" name="moveAvgEnd" value={formData.moveAvgEnd} onChange={handleChange} />
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
