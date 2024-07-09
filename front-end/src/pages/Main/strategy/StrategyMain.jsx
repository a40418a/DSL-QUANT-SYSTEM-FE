import React from 'react';
import './strategy.css';
import { ColorBtn } from '../../../components/button/ColorBtn/ColorBtn';
import { InputBox, InputHalfBox } from '../../../components/box/inputBox/InputBox';
import { CheckBox } from '../../../components/box/checkBox/CheckBox';
import { SelectBox } from '../../../components/box/selectBox/SelectBox';

export const StrategyMain = () => {
    const options_tax = [
        { label: '10%', value: '0.1' },
        { label: '20%', value: '0.2' },
        { label: '25%', value: '0.25' },
        { label: '50%', value: '0.5' },
    ];
    const options_candle = [
        { label: '바', value: 'bar' },
        { label: '캔들', value: 'candle' },
    ];

    return (
        <div className="strategy">
            <div className="strategy-title">공통 변수 설정</div>
            <div className="strategy-select">
                <div className="strategy-subtitle-wrapper">
                    <div className="strategy-subtitle">초기 투자 금액</div>
                </div>
                <div className="strategy-input">
                    <InputBox type="number" placeholder="초기 투자 금액을 입력해주세요." />
                    <span>만원</span>
                </div>
            </div>
            <div className="strategy-select">
                <div className="strategy-subtitle-wrapper">
                    <div className="strategy-subtitle">거래 수수료</div>
                </div>
                <div className="strategy-input">
                    <SelectBox options={options_tax} />
                </div>
            </div>
            <div className="strategy-select">
                <div className="strategy-subtitle-wrapper">
                    <div className="strategy-subtitle">기간 설정</div>
                </div>
                <div className="strategy-input">
                    <div className="half-input-wrapper">
                        <div className="strategy-subtitle-date">시작일 설정</div>
                        <InputHalfBox type="date" />
                    </div>
                    <div className="half-input-wrapper">
                        <div className="strategy-subtitle-date">종료일 설정</div>
                        <InputHalfBox type="date" />
                    </div>
                </div>
            </div>
            <div className="strategy-select">
                <div className="strategy-subtitle-wrapper">
                    <div className="strategy-subtitle">종목 이름(TargetItem)</div>
                </div>
                <div className="strategy-input">
                    <InputBox type="text" placeholder="종목 이름을 정확히 입력하세요." />
                </div>
            </div>
            <div className="strategy-select">
                <div className="strategy-subtitle-wrapper">
                    <div className="strategy-subtitle">캔들 종류(TickKind)</div>
                </div>
                <div className="strategy-input">
                    <SelectBox options={options_candle} />
                </div>
            </div>
            <div className="strategy-select">
                <div className="strategy-subtitle-wrapper">
                    <div className="strategy-subtitle">조회 범위(InqRange)</div>
                </div>
                <div className="strategy-input">
                    <div className="half-input-wrapper">
                        <InputHalfBox type="num" />
                    </div>
                    <span> ~ </span>
                    <div className="half-input-wrapper">
                        <InputHalfBox type="num" />
                    </div>
                </div>
            </div>
            <div className="strategy-title">전략 선택</div>
            <div className="strategy-btn-wrapper">
                <ColorBtn text="골든/데드" link="/strategy/golden" />
                <ColorBtn text="볼린저밴드" link="/strategy/bollinger" />
                <ColorBtn text="RSI,MFI,MACD 지표 이용 전략" link="/strategy/rsi" />
            </div>
            {/* <div className="strategy-subtitle-wrapper">
                <div className="strategy-essential">[필수]</div>
                <div className="strategy-subtitle">유니버스선택</div>
            </div>
            <SelectBox placeholder="국가를 선택해주세요" options={options} />
            <div className="strategy-subtitle-wrapper">
                <div className="strategy-subtitle">기본 필터</div>
            </div>
            <div className="strategy-check-group">
                <div className="strategy-check-group-row">
                    <CheckBox text="금융주 제외" />
                    <CheckBox text="지주사 제외" />
                    <CheckBox text="관리종목 제외" />
                    <CheckBox text="적자기업 제외" />
                    <CheckBox text="적자기업 제외 (년간)" />
                </div>
                <div className="strategy-check-group-row">
                    <CheckBox text="중국기업 제외" />
                    <CheckBox text="PTP 기업 제외" />
                    <CheckBox text="소형주 하위 20%만" />
                </div>
            </div>
            <div className="strategy-subtitle-wrapper">
                <div className="strategy-subtitle">제외할 섹터</div>
            </div>
            <div className="strategy-check-group">
                <div className="strategy-check-group-row">
                    <CheckBox text="건강관리" />
                    <CheckBox text="자동차" />
                    <CheckBox text="화장품,의류,완구" />
                    <CheckBox text="보험" />
                    <CheckBox text="필수 소비재" />
                </div>
                <div className="strategy-check-group-row">
                    <CheckBox text="운송" />
                    <CheckBox text="상사,자본재" />
                    <CheckBox text="비철,목재 등" />
                    <CheckBox text="화학" />
                    <CheckBox text="건설,건축관련" />
                </div>
                <div className="strategy-check-group-row">
                    <CheckBox text="에너지" />
                    <CheckBox text="기계" />
                    <CheckBox text="철강" />
                    <CheckBox text="반도체" />
                    <CheckBox text="IT 하드웨어" />
                </div>
                <div className="strategy-check-group-row">
                    <CheckBox text="통신서비스" />
                    <CheckBox text="증권" />
                    <CheckBox text="디스플레이" />
                    <CheckBox text="IT 가전" />
                    <CheckBox text="소매(유통)" />
                </div>
                <div className="strategy-check-group-row">
                    <CheckBox text="유틸리티" />
                    <CheckBox text="미디어,교육" />
                    <CheckBox text="은행" />
                    <CheckBox text="호텔,레저 서비스" />
                    <CheckBox text="소프트웨어" />
                </div>
                <div className="strategy-check-group-row">
                    <CheckBox text="조선" />
                </div>
            </div> */}
        </div>
    );
};
