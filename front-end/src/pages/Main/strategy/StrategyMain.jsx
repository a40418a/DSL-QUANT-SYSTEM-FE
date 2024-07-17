import React, { useContext, useState } from 'react';
import './strategy.css';
import { ColorBtn } from '../../../components/button/ColorBtn/ColorBtn';
import { InputBox, InputHalfBox } from '../../../components/box/inputBox/InputBox';
import { SelectBox } from '../../../components/box/selectBox/SelectBox';
import { StrategyCommonDTO } from '../../../dto/StrategyDTO';
import { StrategyContext } from '../../../context/StrategyContext';

export const StrategyMain = () => {
    const { setStrategyCommonData } = useContext(StrategyContext);
    const [formData, setFormData] = useState({
        //공통변수
        initial_investment: 0,
        tax: 0,
        start_date: '',
        end_date: '',
        target_item: '',
        tick_kind: '',
        inq_range: [0, 0],
    });

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => {
            const newFormData = { ...prevData, [name]: value };

            // 종료일이 시작일보다 빠른지 확인
            if (name === 'endDate' && newFormData.startDate && new Date(value) < new Date(newFormData.startDate)) {
                alert('종료일은 시작일보다 빠를 수 없습니다.');
                return prevData; // 이전 데이터로 되돌리기
            }

            // 조회 범위가 올바른지 확인
            if (
                (name === 'inqRangeStart' || name === 'inqRangeEnd') &&
                newFormData.inqRangeStart &&
                newFormData.inqRangeEnd &&
                parseFloat(newFormData.inqRangeStart) > parseFloat(newFormData.inqRangeEnd)
            ) {
                alert('조회 범위의 시작 값은 종료 값보다 클 수 없습니다.');
                return prevData; // 이전 데이터로 되돌리기
            }

            // 초기 투자 금액의 최솟값 확인
            if (name === 'initialInvestment' && parseFloat(value) < 0) {
                alert('초기 투자 금액은 0보다 작을 수 없습니다.');
                return prevData; // 이전 데이터로 되돌리기
            }

            return newFormData;
        });
    };

    const handleSubmit = () => {
        const strategyCommonDTO = new StrategyCommonDTO(formData);
        console.log(strategyCommonDTO);
        setStrategyCommonData(strategyCommonDTO);
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
                            name="initialInvestment"
                            value={formData.initialInvestment}
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
                        options={options_tax}
                        name="commissions"
                        value={formData.commision}
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
                        <InputHalfBox type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
                    </div>
                    <div className="half-input-wrapper">
                        <div className="strategy-subtitle-date">종료일 설정</div>
                        <InputHalfBox type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
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
                        name="targetItem"
                        value={formData.targetItem}
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
                        options={options_candle}
                        name="candleType"
                        value={formData.candleType}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="strategy-select">
                <div className="strategy-subtitle-wrapper">
                    <div className="strategy-subtitle">조회 범위(InqRange)</div>
                </div>
                <div className="strategy-input">
                    <div className="half-input-wrapper">
                        <InputHalfBox
                            type="num"
                            name="inqRangeStart"
                            value={formData.inqRangeStart}
                            onChange={handleChange}
                        />
                    </div>
                    <span> ~ </span>
                    <div className="half-input-wrapper">
                        <InputHalfBox
                            type="num"
                            name="inqRangeEnd"
                            value={formData.inqRangeEnd}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="strategy-title">전략 선택</div>
            <div className="strategy-btn-wrapper">
                <ColorBtn text="골든/데드" link="/strategy/1" onClick={handleSubmit} />
                <ColorBtn text="볼린저밴드" link="/strategy/2" onClick={handleSubmit} />
                <ColorBtn text="RSI,MFI,MACD 지표 이용 전략" link="/strategy/3" onClick={handleSubmit} />
            </div>
        </div>
    );
};
