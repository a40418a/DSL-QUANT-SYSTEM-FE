//공통전략설정 및 전략 선택 페이지

import React, { useContext, useState } from 'react';
import './strategy.css';
import { ColorBtn } from '../../../components/button/ColorBtn/ColorBtn';
import { InputBox, InputHalfBox } from '../../../components/box/inputBox/InputBox';
import { SelectBox } from '../../../components/box/selectBox/SelectBox';
import { StrategyCommonDTO } from '../../../types/StrategyDTO';
import { StrategyContext } from '../../../context/StrategyContext';
import { useNavigate } from 'react-router-dom';

export const StrategyMain = () => {
    const { setStrategyCommonData } = useContext(StrategyContext);
    const [formData, setFormData] = useState({
        initial_investment: 0,
        tax: 0,
        start_date: '',
        end_date: '',
        target_item: '',
        tick_kind: '',
        inq_range: [0, 0],
    });
    const navigate = useNavigate();

    const options_tax = [
        { label: '0.01%', value: '0.01' },
        { label: '0.02%', value: '0.02' },
        { label: '0.03%', value: '0.03' },
        { label: '0.04%', value: '0.04' },
        { label: '0.05%', value: '0.05' },
        { label: '0.06%', value: '0.06' },
        { label: '0.07%', value: '0.07' },
        { label: '0.08%', value: '0.08' },
        { label: '0.09%', value: '0.09' },
        { label: '0.1%', value: '0.1' },
    ];
    const options_candle = [
        { label: '1분', value: '1' },
        { label: '3분', value: '3' },
        { label: '5분', value: '5' },
        { label: '10분', value: '10' },
        { label: '15분', value: '15' },
        { label: '30분', value: '30' },
        { label: '60분', value: '60' },
        { label: '240분', value: '240' },
        { label: '1일', value: 'D' },
        { label: '1주', value: 'W' },
        { label: '1개월', value: 'M' },
    ];
    const options_strategy = [
        { label: '골든/데드', value: '골든/데드' },
        { label: '볼린저밴드', value: '볼린저밴드' },
        { label: 'RSI, MFI, MACD 지표 이용', value: 'RSI, MFI, MACD 지표 이용' },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => {
            const newFormData = { ...prevData, [name]: value };

            if (name === 'end_date' && newFormData.start_date && new Date(value) < new Date(newFormData.start_date)) {
                alert('종료일은 시작일보다 빠를 수 없습니다.');
                return prevData;
            }

            if (
                (name === 'inq_range_start' || name === 'inq_range_end') &&
                newFormData.inq_range_start &&
                newFormData.inq_range_end &&
                parseFloat(newFormData.inq_range_start) > parseFloat(newFormData.inq_range_end)
            ) {
                alert('조회 범위의 시작 값은 종료 값보다 클 수 없습니다.');
                return prevData;
            }

            if (name === 'initial_investment' && parseFloat(value) < 0) {
                alert('초기 투자 금액은 0보다 작을 수 없습니다.');
                return prevData;
            }

            if (name === 'inq_range' && parseFloat(value) < 0) {
                alert('조회 범위는 0보다 작을 수 없습니다.');
                return prevData;
            }

            return newFormData;
        });
    };

    const handleSubmit = (strategyPath) => {
        const strategyCommonDTO = new StrategyCommonDTO(formData);
        console.log(strategyCommonDTO);
        setStrategyCommonData(strategyCommonDTO);
        navigate(strategyPath); // 페이지 이동 처리
    };

    return (
        <div className="strategy">
            <div className="strategy-title">공통 변수 설정</div>
            <div className="strategy-select">
                <div className="strategy-subtitle-wrapper">
                    <div className="strategy-subtitle">초기 투자 금액</div>
                </div>
                <div className="strategy-input">
                    <div className="input-inital-investment">
                        <InputBox
                            type="number"
                            placeholder="초기 투자 금액을 입력해주세요."
                            name="initial_investment"
                            value={formData.initial_investment}
                            onChange={handleChange}
                        />
                    </div>
                    <span>만원</span>
                </div>
            </div>
            <div className="strategy-select">
                <div className="strategy-subtitle-wrapper">
                    <div className="strategy-subtitle">거래 수수료</div>
                </div>
                <div className="strategy-input">
                    <SelectBox
                        placeholder="거래 수수료를 선택해주세요."
                        options={options_tax}
                        name="tax"
                        value={formData.tax}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="strategy-select">
                <div className="strategy-subtitle-wrapper">
                    <div className="strategy-subtitle">기간 설정</div>
                </div>
                <div className="strategy-input">
                    <div className="half-input-wrapper">
                        <div className="strategy-subtitle-date">시작일 설정</div>
                        <InputHalfBox
                            type="date"
                            name="start_date"
                            value={formData.start_date}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="half-input-wrapper">
                        <div className="strategy-subtitle-date">종료일 설정</div>
                        <InputHalfBox type="date" name="end_date" value={formData.end_date} onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className="strategy-select">
                <div className="strategy-subtitle-wrapper">
                    <div className="strategy-subtitle">종목 이름(TargetItem)</div>
                </div>
                <div className="strategy-input">
                    <InputBox
                        type="text"
                        placeholder="종목 이름을 정확히 입력하세요."
                        name="target_item"
                        value={formData.target_item}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="strategy-select">
                <div className="strategy-subtitle-wrapper">
                    <div className="strategy-subtitle">캔들 종류(TickKind)</div>
                </div>
                <div className="strategy-input">
                    <SelectBox
                        placeholder="캔들 종류를 선택해주세요."
                        options={options_candle}
                        name="tick_kind"
                        value={formData.tick_kind}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="strategy-select">
                <div className="strategy-subtitle-wrapper">
                    <div className="strategy-subtitle">조회 범위(InqRange)</div>
                </div>
                <div className="strategy-input">
                    <InputBox
                        type="number"
                        placeholder="조회 범위를 입력하세요."
                        name="inq_range"
                        value={formData.inq_range}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="strategy-title">전략 선택</div>
            <div className="strategy-select">
                <div className="strategy-input">
                    <SelectBox
                        placeholder="전략을 선택하세요."
                        options={options_strategy}
                        name="strategy"
                        value={formData.strategy}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="strategy-btn-wrapper" id="btn-to-result">
                <ColorBtn id="colorBtn-prev" text="< 이전" onClick={() => window.history.back()} />
                <ColorBtn id="colorBtn-next" text="다음" onClick={handleSubmit} />
            </div>
        </div>
    );
};
