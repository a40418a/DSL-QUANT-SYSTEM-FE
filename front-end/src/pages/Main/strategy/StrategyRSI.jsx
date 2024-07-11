import React, { useContext, useState } from 'react';
import './strategy.css';
import { ColorBtn } from '../../../components/button/ColorBtn/ColorBtn';
import { InputBox } from '../../../components/box/inputBox/InputBox';
import { Strategy3DTO } from '../../../dto/StrategyDTO';
import { StrategyContext } from '../../../context/StrategyContext';

export const Strategy3 = () => {
    const { setStrategy3Data } = useContext(StrategyContext);
    const [formData, setFormData] = useState({
        rsi_period: [0, 0],
        mfi_count: 0,
    });

    const handleChange = (e) => {
        //input값 변경
        const { name, value } = e.target; //name과 value값 가져오기
        setFormData((prevData) => ({
            //기존의 데이터를 가져와서
            ...prevData, //기존의 데이터를 그대로 두고
            [name]: value, //name에 해당하는 value값을 변경
        }));
    };

    const handleSubmit = () => {
        const strategy3DTO = new Strategy3DTO(formData);
        console.log(strategy3DTO);
        setStrategy3Data(strategy3DTO);
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
                <ColorBtn id="colorBtn-next" text="백테스트" link="/result" onClick={handleSubmit} />
            </div>
        </div>
    );
};
