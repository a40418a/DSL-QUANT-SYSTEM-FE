import React from 'react';
import './strategy.css';
import { ColorBtn } from '../../../components/button/ColorBtn/ColorBtn';
import { InputBox } from '../../../components/box/inputBox/InputBox';

export const Strategy2 = () => {
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
                        <InputBox type="date" />
                    </div>
                    <div className="half-input-wrapper">
                        <div className="strategy-subtitle-date">종료일 설정</div>
                        <InputBox type="date" />
                    </div>
                </div>
            </div>
            <div className="strategy-btn-wrapper" id="btn-to-result">
                <ColorBtn id="colorBtn-prev" text="< 이전" onClick={() => window.history.back()} />
                <ColorBtn id="colorBtn-next" text="백테스트" link="/result" />
            </div>
        </div>
    );
};
