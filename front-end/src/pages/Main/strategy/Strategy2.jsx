import React from 'react';
import './strategy.css';
import { ColorBtn } from '../../../components/button/ColorBtn/ColorBtn';
import { CheckBox } from '../../../components/box/checkBox/CheckBox';
import { SelectBox } from '../../../components/box/selectBox/SelectBox';
import { StrategyDTO } from '../../../dto/StrategyDTO';

export const Strategy2 = () => {
    const options = [
        { label: '동일 비중 결합', value: '동일 비중 결합' },
        { label: '가변 비중 결합(지원예정)', value: '가변 비중 결합(지원예정)' },
    ];

    return (
        <div className="strategy">
            <div className="strategy-title-wrapper">
                <div className="strategy-essential">[필수]</div>
                <div className="strategy-title">팩터 설정</div>
            </div>
            <div className="strategy-subtitle-wrapper">
                <div className="strategy-subtitle">팩터 비중 산출</div>
            </div>
            <SelectBox placeholder="비중 선택" options={options} />
            <div className="strategy-subtitle-wrapper">
                <div className="strategy-subtitle">가치 팩터 (Price 관련)</div>
            </div>
            <div className="strategy-check-group">
                <div className="strategy-check-group-row">
                    <CheckBox text="시가총액" />
                    <CheckBox text="PER" />
                    <CheckBox text="PER (TTM)" />
                    <CheckBox text="PBR" />
                    <CheckBox text="PSR" />
                </div>
                <div className="strategy-check-group-row">
                    <CheckBox text="PSR (TTM)" />
                    <CheckBox text="POR" />
                    <CheckBox text="POR (TTM)" />
                    <CheckBox text="PCR" />
                    <CheckBox text="PCR (TTM)" />
                </div>
                <div className="strategy-check-group-row">
                    <CheckBox text="PFCR" />
                    <CheckBox text="PRR" />
                    <CheckBox text="PGPR" />
                    <CheckBox text="PGPR (TTM)" />
                    <CheckBox text="PEG" />
                </div>
                <div className="strategy-check-group-row">
                    <CheckBox text="PAR" />
                    <CheckBox text="PACR" />
                    <CheckBox text="PITR" />
                    <CheckBox text="NCAV" />
                    <CheckBox text="배당수익률" />
                </div>
                <div className="strategy-check-group-row">
                    <CheckBox text="주주수익률" />
                </div>
            </div>
            <div className="strategy-subtitle-wrapper">
                <div className="strategy-subtitle">가치 팩터 (EV 관련)</div>
            </div>
            <div className="strategy-check-group">
                <div className="strategy-check-group-row">
                    <CheckBox text="EV" />
                    <CheckBox text="EV/Net" />
                    <CheckBox text="EV/Sales" />
                    <CheckBox text="EV/EBITDA" />
                    <CheckBox text="EV/EBIT" />
                </div>
                <div className="strategy-check-group-row">
                    <CheckBox text="EV/GP" />
                    <CheckBox text="EV/R&D" />
                    <CheckBox text="EV/CF" />
                    <CheckBox text="EV/AC" />
                </div>
            </div>
            <div className="strategy-subtitle-wrapper">
                <div className="strategy-subtitle">퀄리티 팩터</div>
            </div>
            <div className="strategy-check-group">
                <div className="strategy-check-group-row">
                    <CheckBox text="ROE" />
                    <CheckBox text="ROA" />
                    <CheckBox text="ROE (TTM)" />
                    <CheckBox text="ROA (TTM)" />
                    <CheckBox text="ROIC" />
                </div>
                <div className="strategy-check-group-row">
                    <CheckBox text="GPIC" />
                    <CheckBox text="RIC" />
                    <CheckBox text="GP/E" />
                    <CheckBox text="GP/A" />
                    <CheckBox text="GP/A (TTM)" />
                </div>
                <div className="strategy-check-group-row">
                    <CheckBox text="GP/IT" />
                    <CheckBox text="무형자산 Turnover" />
                    <CheckBox text="OP/IT" />
                    <CheckBox text="ROIT" />
                    <CheckBox text="Asset Turnover" />
                </div>
                <div className="strategy-check-group-row">
                    <CheckBox text="Asset Turnover(TTM)" />
                    <CheckBox text="GPM" />
                    <CheckBox text="OPM" />
                    <CheckBox text="NPM" />
                    <CheckBox text="F-score" />
                </div>
                <div className="strategy-check-group-row">
                    <CheckBox text="R&D / 매출액" />
                    <CheckBox text="R&D / 매출총이익" />
                    <CheckBox text="R&D 영업이익" />
                    <CheckBox text="R&D / 순이익" />
                    <CheckBox text="AC/A" />
                </div>
                <div className="strategy-check-group-row">
                    <CheckBox text="AC/E" />
                    <CheckBox text="변동성 (52주)" />
                    <CheckBox text="변동성 (60일)" />
                    <CheckBox text="영업이익 / 차입금" />
                    <CheckBox text="차입금비율" />
                </div>
                <div className="strategy-check-group-row">
                    <CheckBox text="유보율" />
                    <CheckBox text="이익변동성" />
                    <CheckBox text="유동비율" />
                    <CheckBox text="Altman Z-score" />
                    <CheckBox text="ROCE" />
                </div>
            </div>
            <div className="strategy-btn-wrapper">
                <ColorBtn id="colorBtn-prev" text="< 이전" onClick={() => window.history.back()} />
                <ColorBtn id="colorBtn-next" text="다음 >" link="/strategy3" />
            </div>
        </div>
    );
};
