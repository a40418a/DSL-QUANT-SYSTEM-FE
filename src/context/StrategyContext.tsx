// 전략 설정 관련 Context

import React, { createContext, useState, useContext } from 'react';
import { StrategyCommonDTO, StrategyGoldenDTO, StrategyBolligerDTO, StrategyRsiDTO } from '../types/StrategyDTO';

// 초기 상태값
const initialStrategyCommonData: StrategyCommonDTO = {
    initialInvestment: 0,
    commission: 0.01,
    startDate: '',
    endDate: '',
    targetItem: '',
    candleType: '',
    inqRange: 0,
};

const initialStrategy1Data: StrategyGoldenDTO = {
    fastMoveAvg: 0,
    slowMoveAvg: 0,
};

const initialStrategy2Data: StrategyBolligerDTO = {
    moveAvg: 0,
};

const initialStrategy3Data: StrategyRsiDTO = {
    rsiStart: '',
    rsiEnd: '',
    mfiLoopCount: 0,
};

// Context 생성
export const StrategyContext = createContext<{
    strategyCommonData: StrategyCommonDTO;
    setStrategyCommonData: React.Dispatch<React.SetStateAction<StrategyCommonDTO>>;
    strategy1Data?: StrategyGoldenDTO;
    setStrategy1Data?: React.Dispatch<React.SetStateAction<StrategyGoldenDTO>>;
    strategy2Data?: StrategyBolligerDTO;
    setStrategy2Data?: React.Dispatch<React.SetStateAction<StrategyBolligerDTO>>;
    strategy3Data?: StrategyRsiDTO;
    setStrategy3Data?: React.Dispatch<React.SetStateAction<StrategyRsiDTO>>;
}>({
    strategyCommonData: initialStrategyCommonData,
    setStrategyCommonData: () => {},
});

// Context Provider
export const StrategyProvider: React.FC = ({ children }) => {
    const [strategyCommonData, setStrategyCommonData] = useState<StrategyCommonDTO>(initialStrategyCommonData);
    const [strategy1Data, setStrategy1Data] = useState<StrategyGoldenDTO>(initialStrategy1Data);
    const [strategy2Data, setStrategy2Data] = useState<StrategyBolligerDTO>(initialStrategy2Data);
    const [strategy3Data, setStrategy3Data] = useState<StrategyRsiDTO>(initialStrategy3Data);

    return (
        <StrategyContext.Provider
            value={{
                strategyCommonData,
                setStrategyCommonData,
                strategy1Data,
                setStrategy1Data,
                strategy2Data,
                setStrategy2Data,
                strategy3Data,
                setStrategy3Data,
            }}
        >
            {children}
        </StrategyContext.Provider>
    );
};

// Custom Hook
export const useStrategy = () => {
    const context = useContext(StrategyContext);
    if (!context) {
        throw new Error('useStrategy must be used within a StrategyProvider');
    }
    return context;
};
