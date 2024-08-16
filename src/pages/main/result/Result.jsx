import React, { useContext } from 'react';
import styles from './result.module.css';
import { StrategyContext } from '../../../context/StrategyContext';
import { useParams } from 'react-router-dom';

export const Result = () => {
    const { strategyCommonData, strategy1Data, strategy2Data, strategy3Data } = useContext(StrategyContext);
    const { id } = useParams(); // URL에서 id를 추출합니다.

    // HTML 콘텐츠를 저장하는 함수
    const saveHtml = () => {
        // Navigator 제거
        // const navigatorElement = document.querySelector('.navigator');
        // if (navigatorElement) {
        //     navigatorElement.style.display = 'none';
        // }

        // 이벤트 비활성화
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = `
            * {
                pointer-events: none !important;
                user-select: none !important;
            }
        `;
        document.head.appendChild(style);

        const htmlContent = document.documentElement.outerHTML;
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const filename = `result_${timestamp}.html`;

        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);

        // 다운로드 링크를 생성
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        // Navigator 복구
        // if (navigatorElement) {
        //     navigatorElement.style.display = '';
        // }

        // 이벤트 복구
        document.head.removeChild(style);
    };

    return (
        <div className={styles.result}>
            <div className={styles.title}>
                <div className={styles.name}>최승아</div>
                <div className={styles.sub}>님의 전략선택옵션</div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.infoTitle}>공통 전략 데이터</div>
                <table className={styles.table}>
                    <tbody>
                        {Object.entries(strategyCommonData).map(([key, value]) => (
                            <tr key={key}>
                                <th>{key}</th>
                                <td>{JSON.stringify(value)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className={styles.infoTitle}>
                    선택 전략 <p>{id}</p> 데이터
                </div>
                <table className={styles.table}>
                    <tbody>
                        {id === 'golden' &&
                            Object.entries(strategy1Data).map(([key, value]) => (
                                <tr key={key}>
                                    <th>{key}</th>
                                    <td>{JSON.stringify(value)}</td>
                                </tr>
                            ))}
                        {id === 'bollinger' &&
                            Object.entries(strategy2Data).map(([key, value]) => (
                                <tr key={key}>
                                    <th>{key}</th>
                                    <td>{JSON.stringify(value)}</td>
                                </tr>
                            ))}
                        {id === 'rsi' &&
                            Object.entries(strategy3Data).map(([key, value]) => (
                                <tr key={key}>
                                    <th>{key}</th>
                                    <td>{JSON.stringify(value)}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            <div className={styles.title}>
                <div className={styles.name}>최승아</div>
                <div className={styles.sub}>님의 백테스팅 결과</div>
            </div>
            <div className={styles.box}>
                <div>해당 분석 결과를 추후에도 확인하고 싶다면 아래의 html로 저장하기 버튼을 눌러주세요</div>
                <div>파일 분석 팁💡💡</div>
                <div className={styles.download} onClick={saveHtml}>
                    HTML로 저장하기
                </div>
            </div>
        </div>
    );
};
