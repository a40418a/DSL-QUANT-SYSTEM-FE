// src/context/StrategyContext.ts

import React, { createContext, useState, useContext } from 'react';
import { StrategyCommonDTO, Strategy1DTO, Strategy2DTO, Strategy3DTO } from '../dto/StrategyDTO';

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

const initialStrategy1Data: Strategy1DTO = {
    fastMoveAvg: 0,
    slowMoveAvg: 0,
};

const initialStrategy2Data: Strategy2DTO = {
    moveAvg: 0,
};

const initialStrategy3Data: Strategy3DTO = {
    rsiStart: '',
    rsiEnd: '',
    mfiLoopCount: 0,
};

// Context 생성
export const StrategyContext = createContext<{
    strategyCommonData: StrategyCommonDTO;
    setStrategyCommonData: React.Dispatch<React.SetStateAction<StrategyCommonDTO>>;
    strategy1Data?: Strategy1DTO;
    setStrategy1Data?: React.Dispatch<React.SetStateAction<Strategy1DTO>>;
    strategy2Data?: Strategy2DTO;
    setStrategy2Data?: React.Dispatch<React.SetStateAction<Strategy2DTO>>;
    strategy3Data?: Strategy3DTO;
    setStrategy3Data?: React.Dispatch<React.SetStateAction<Strategy3DTO>>;
}>({
    strategyCommonData: initialStrategyCommonData,
    setStrategyCommonData: () => {},
});

// Context Provider
export const StrategyProvider: React.FC = ({ children }) => {
    const [strategyCommonData, setStrategyCommonData] = useState<StrategyCommonDTO>(initialStrategyCommonData);
    const [strategy1Data, setStrategy1Data] = useState<Strategy1DTO>(initialStrategy1Data);
    const [strategy2Data, setStrategy2Data] = useState<Strategy2DTO>(initialStrategy2Data);
    const [strategy3Data, setStrategy3Data] = useState<Strategy3DTO>(initialStrategy3Data);

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
