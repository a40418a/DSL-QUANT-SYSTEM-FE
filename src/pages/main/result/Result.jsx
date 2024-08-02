import React, { useContext, useState } from 'react';
import './result.css';
import { StrategyContext } from '../../../context/StrategyContext';
import { useParams } from 'react-router-dom';
import { UserInfoDTO } from '../../../types/UserInfoDTO';

export const Result = () => {
    const { strategyCommonData, strategy1Data, strategy2Data, strategy3Data } = useContext(StrategyContext);
    const { id } = useParams(); // URL에서 id를 추출합니다.
    const [userInfo] = useState(new UserInfoDTO('최승아', '010-7110-0441', '2001.04.18', '여자', ['기록1', '기록2']));

    return (
        <div className="result">
            <div className="result-title">
                <div className="result-title-name">{userInfo.userName}</div>
                <div className="result-title-content">님의 전략선택옵션</div>
            </div>
            <div className="result-info">
                <div className="result-info-title">공통 전략 데이터</div>
                <table className="result-info-table">
                    <thead>
                        <tr>
                            {Object.keys(strategyCommonData).map((key) => (
                                <th key={key}>{key}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {Object.values(strategyCommonData).map((value, index) => (
                                <td key={index}>{JSON.stringify(value)}</td>
                            ))}
                        </tr>
                    </tbody>
                </table>
                <div className="result-info-title">
                    선택 전략 <p>{id}</p> 데이터
                </div>
                <table className="result-info-table">
                    <thead>
                        <tr>
                            {Object.keys(strategy1Data).map((key) => (
                                <th key={key}>{key}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {Object.values(strategy1Data).map((value, index) => (
                                <td key={index}>{JSON.stringify(value)}</td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="result-title">
                <div className="result-title-name">{userInfo.userName}</div>
                <div className="result-title-content">님의 백테스팅 결과</div>
            </div>
            <div className="result-explain">
                <div>전략결과는 저장된 html 파일을 확인하세요</div>
                <div>파일 분석 팁💡💡</div>
            </div>
        </div>
    );
};
