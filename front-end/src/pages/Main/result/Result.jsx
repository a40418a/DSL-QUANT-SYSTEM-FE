import React, { useContext } from 'react';
import './result.css';
import { StrategyContext } from '../../../context/StrategyContext';

export const Result = () => {
    const { strategyCommonData, strategy1Data, strategy2Data, strategy3Data } = useContext(StrategyContext);

    return (
        <div className="result">
            <h1>결과 화면</h1>
            <div className="strategy-data">
                <h2>공통 전략 데이터</h2>
                <pre>{JSON.stringify(strategyCommonData, null, 2)}</pre>
            </div>
            <div className="strategy1-data">
                <h2>전략 1 데이터</h2>
                <pre>{JSON.stringify(strategy1Data, null, 2)}</pre>
            </div>
            <div className="strategy2-data">
                <h2>전략 2 데이터</h2>
                <pre>{JSON.stringify(strategy2Data, null, 2)}</pre>
            </div>
            <div className="strategy3-data">
                <h2>전략 3 데이터</h2>
                <pre>{JSON.stringify(strategy3Data, null, 2)}</pre>
            </div>
        </div>
    );
};
