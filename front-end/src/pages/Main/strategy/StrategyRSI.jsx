import React from 'react';
import './strategy.css';
import { ColorBtn } from '../../../components/button/ColorBtn/ColorBtn';
import { InputBox } from '../../../components/box/inputBox/InputBox';
import { CheckBox } from '../../../components/box/checkBox/CheckBox';
import { SelectBox } from '../../../components/box/selectBox/SelectBox';
import { StrategyDTO } from '../../../dto/StrategyDTO';

export const Strategy3 = () => {
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
                        <InputBox type="date" />
                    </div>
                    <div className="half-input-wrapper">
                        <div className=" strategy-subtitle-date">종료일 설정</div>
                        <InputBox type="date" />
                    </div>
                </div>
            </div>
            <div className="strategy-select">
                <div className="strategy-subtitle-wrapper">
                    <div className="strategy-subtitle">반복 계산 횟수(loopCount)</div>
                </div>
                <div className="strategy-input">
                    <InputBox type="number" placeholder="MFI 반복 계산 횟수를 입력하세요" />
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
                <ColorBtn id="colorBtn-next" text="백테스트" link="/result" />
            </div>
        </div>
    );
};
