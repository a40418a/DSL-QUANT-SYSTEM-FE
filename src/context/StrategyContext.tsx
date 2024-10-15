// 전략 설정 관련 Context

import React, { createContext, useState, useContext } from "react";
import {
    StrategyCommonDTO,
    StrategyGoldenDTO,
    StrategyBollingerDTO,
    StrategyRsiDTO,
    StrategyEnvDTO,
    StrategyWDTO,
} from "../types/StrategyDTO";
import { ResultDTO } from "../types/ResultDTO";

// 초기 상태값
const initialStrategyCommonData: StrategyCommonDTO = {
    initial_investment: 0,
    tax: 0.01,
    target_item: "",
    tick_kind: "",
    inq_range: 100,
    strategy: "",
};

const initialStrategyGolData: StrategyGoldenDTO = {
    fastMoveAvg: 0,
    slowMoveAvg: 0,
};

const initialStrategyBolData: StrategyBollingerDTO = {
    moveAvg: 0,
};

const initialStrategyRsiData: StrategyRsiDTO = {
    rsiPeriod: 0,
};

const initialStrategyEnvData: StrategyEnvDTO = {
    moving_up: 0,
    moving_down: 0,
    movingAveragePeriod: 0,
};

const initialStrategyWilData: StrategyWDTO = {
    williamsPeriod: 0,
};

const initialResultData: ResultDTO = {
    finalCash: 0,
    finalAsset: 0,
    finalBalance: 0,
    profit: 0,
    profitRate: 0,
    numberOfTrades: 0,
};

// Context 생성
export const StrategyContext = createContext<{
    strategyCommonData: StrategyCommonDTO;
    setStrategyCommonData: React.Dispatch<React.SetStateAction<StrategyCommonDTO>>;
    strategyGolData: StrategyGoldenDTO;
    setStrategyGolData: React.Dispatch<React.SetStateAction<StrategyGoldenDTO>>;
    strategyBolData: StrategyBollingerDTO;
    setStrategyBolData: React.Dispatch<React.SetStateAction<StrategyBollingerDTO>>;
    strategyRsiData: StrategyRsiDTO;
    setStrategyRsiData: React.Dispatch<React.SetStateAction<StrategyRsiDTO>>;
    strategyEnvData: StrategyEnvDTO;
    setStrategyEnvData: React.Dispatch<React.SetStateAction<StrategyEnvDTO>>;
    strategyWilData: StrategyWDTO;
    setStrategyWilData: React.Dispatch<React.SetStateAction<StrategyWDTO>>;
    resultData: ResultDTO;
    setResultData: React.Dispatch<React.SetStateAction<ResultDTO>>;
}>({
    strategyCommonData: initialStrategyCommonData,
    setStrategyCommonData: () => {},
    strategyGolData: initialStrategyGolData,
    setStrategyGolData: () => {},
    strategyBolData: initialStrategyBolData,
    setStrategyBolData: () => {},
    strategyRsiData: initialStrategyRsiData,
    setStrategyRsiData: () => {},
    strategyEnvData: initialStrategyEnvData,
    setStrategyEnvData: () => {},
    strategyWilData: initialStrategyWilData,
    setStrategyWilData: () => {},
    resultData: initialResultData,
    setResultData: () => {},
});

// Context Provider
// @ts-ignore
export const StrategyProvider: React.FC = ({ children }) => {
    const [strategyCommonData, setStrategyCommonData] =
        useState<StrategyCommonDTO>(initialStrategyCommonData);
    const [strategyGolData, setStrategyGolData] =
        useState<StrategyGoldenDTO>(initialStrategyGolData);
    const [strategyBolData, setStrategyBolData] =
        useState<StrategyBollingerDTO>(initialStrategyBolData);
    const [strategyRsiData, setStrategyRsiData] = useState<StrategyRsiDTO>(initialStrategyRsiData);
    const [strategyEnvData, setStrategyEnvData] = useState<StrategyEnvDTO>(initialStrategyEnvData);
    const [strategyWilData, setStrategyWilData] = useState<StrategyWDTO>(initialStrategyWilData);
    const [resultData, setResultData] = useState<ResultDTO>(initialResultData);

    return (
        <StrategyContext.Provider
            value={{
                strategyCommonData,
                setStrategyCommonData,
                strategyGolData,
                setStrategyGolData,
                strategyBolData,
                setStrategyBolData,
                strategyRsiData,
                setStrategyRsiData,
                strategyEnvData,
                setStrategyEnvData,
                strategyWilData,
                setStrategyWilData,
                resultData,
                setResultData,
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
        throw new Error("useStrategy must be used within a StrategyProvider");
    }
    return context;
};
