import React from 'react';
import './strategy.css';
import { ColorBtn } from '../../../components/button/ColorBtn/ColorBtn';
import { CheckBox } from '../../../components/box/checkBox/CheckBox';
import { SelectBox } from '../../../components/box/selectBox/SelectBox';
import { InputBox } from '../../../components/box/inputBox/InputBox';

export const Strategy3 = () => {
    const options1 = [
        { label: '월별', value: '월별' },
        { label: '분기별', value: '분기별' },
        { label: '반기별', value: '반기별' },
        { label: '매년', value: '매년' },
        { label: '시즈널리티', value: '시즈널리티' },
    ];
    const options2 = [
        { label: '동일 비중', value: '동일 비중' },
        { label: '가치 가중(지원예정)', value: '가치 가중(지원예정)' },
    ];

    return (
        <div className="strategy">
            <div className="strategy-title-wrapper">
                <div className="strategy-essential">[필수]</div>
                <div className="strategy-title">백테스트 설정</div>
            </div>
            <div className="strategy-subtitle-wrapper">
                <div className="strategy-subtitle">초기 투자 금액</div>
            </div>
            <div className="strategy-input">
                <InputBox type="number" placeholder="초기 투자 금액을 입력해주세요." />
                <span>만원</span>
            </div>
            <div className="strategy-subtitle-wrapper">
                <div className="strategy-subtitle">거래 수수료</div>
            </div>
            <div className="strategy-input">
                <InputBox type="number" placeholder="0" />
                <span>%</span>
            </div>
            <div className="strategy-explain">0~100까지 입력할 수 있습니다.</div>
            <div className="strategy-title-wrapper">
                <div className="strategy-essential">[필수]</div>
                <div className="strategy-title">리밸런싱 설정</div>
            </div>
            <div className="strategy-subtitle-wrapper">
                <div className="strategy-subtitle">리밸런싱 기간</div>
            </div>
            <SelectBox placeholder="리밸런싱 기간을 선택해주세요." options={options1} />
            <div className="strategy-subtitle-wrapper">
                <div className="strategy-subtitle">초기 투자 금액</div>
            </div>
            <SelectBox placeholder="비중 선택" options={options2} />
            <div className="strategy-subtitle-wrapper">
                <div className="strategy-subtitle">종목 수</div>
            </div>
            <div className="strategy-input">
                <InputBox type="number" placeholder="20" />
                <span>개</span>
            </div>
            <div className="strategy-explain">0~100까지 입력할 수 있습니다.</div>
            <div className="strategy-subtitle-wrapper">
                <div className="strategy-subtitle">마켓 타이밍 설정</div>
            </div>
            <div className="strategy-check-group">
                <div className="strategy-check-group-row">
                    <CheckBox text="매크로 마켓 타이밍" />
                    <CheckBox text="재진입 마켓 타이밍" />
                </div>
            </div>
            <div className="strategy-btn-wrapper">
                <ColorBtn id="colorBtn-prev" text="< 이전" link="/strategy2" />
                <ColorBtn id="colorBtn-next" text="백테스트" link="/result" />
            </div>
        </div>
    );
};
