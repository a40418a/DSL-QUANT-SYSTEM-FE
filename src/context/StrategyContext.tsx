import React, { createContext, useState, useContext } from "react";
import {
    StrategyCommonDTO,
    StrategyGoldenDTO,
    StrategyBollingerDTO,
    StrategyRsiDTO,
    StrategyEnvDTO,
    StrategyWDTO,
    MultiStrategyDTO,
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

// MultiStrategy 초기 상태값
const initialMultiStrategyData: MultiStrategyDTO = {
    userId: 0,
    second_strategy: "",
    profitVsRate: 0,
    finalProfitRate: 0,
    moveAvg: 0,
    moving_up: 0,
    moving_down: 0,
    movingAveragePeriod: 0,
    fastMoveAvg: 0,
    slowMoveAvg: 0,
    rsiPeriod: 0,
    williamsPeriod: 0,
    second_finalCash: 0,
    second_finalAsset: 0,
    second_finalBalance: 0,
    second_profit: 0,
    second_profitRate: 0,
    second_numberOfTrades: 0,
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
    multiStrategyData: MultiStrategyDTO;
    setMultiStrategyData: React.Dispatch<React.SetStateAction<MultiStrategyDTO>>;
    resultData: ResultDTO;
    setResultData: React.Dispatch<React.SetStateAction<ResultDTO>>;
}>( {
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
    multiStrategyData: initialMultiStrategyData,
    setMultiStrategyData: () => {},
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
    const [multiStrategyData, setMultiStrategyData] = useState<MultiStrategyDTO>(initialMultiStrategyData);
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
                multiStrategyData,
                setMultiStrategyData,
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
