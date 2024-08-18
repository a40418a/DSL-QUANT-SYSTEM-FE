import React from 'react';
import styles from './stockList.module.css';
import { userData03 } from '../../../data/dummyData03';
import { useNavigate } from 'react-router-dom';

export const StockList = () => {
    const navigate = useNavigate();

    const onClick = (name) => {
        navigate(`/stockinfo`);
        // navigate(`/stockinfo/${name}`);
    };

    return (
        <div className={styles.stocklist}>
            <div className={styles.title}>코인 종목</div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>종목명</th>
                        <th>현재가</th>
                    </tr>
                </thead>
                <tbody>
                    {userData03.map((data, index) => (
                        <tr key={index}>
                            <td>{data.rank}</td>
                            <td className={styles.dataText} onClick={() => onClick(data.name)}>
                                {' '}
                                {data.name}
                            </td>
                            <td className={styles.dataNum} onClick={() => onClick(data.name)}>
                                {data.now.toLocaleString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
