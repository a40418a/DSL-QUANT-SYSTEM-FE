import React from 'react';
import './strategy.css';
import { ColorBtn } from '../../../components/button/ColorBtn/ColorBtn';
import { CheckBox } from '../../../components/box/checkBox/CheckBox';
import { SelectBox } from '../../../components/box/selectBox/SelectBox';
import { StrategyDTO } from '../../../dto/StrategyDTO';

export const Strategy1 = () => {
    const options = [
        { label: '한국', value: '한국' },
        { label: '미국', value: '미국' },
        { label: 'KOSPI', value: 'KOSPI' },
        { label: 'KOSDAQ', value: 'KOSDAQ' },
    ];

    return (
        <div className="strategy">
            <div className="strategy-title">유니버스 설정</div>
            <div className="strategy-subtitle-wrapper">
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
            </div>
            <div className="strategy-btn-wrapper">
                <ColorBtn id="colorBtn-next" text="다음 >" link="/strategy2" />
            </div>
        </div>
    );
};
