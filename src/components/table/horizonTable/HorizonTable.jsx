import React from 'react';
import styles from './horizonTable.module.css';
import { userData03 } from '../../../data/dummyData03';
import { styled } from '@mui/material';

export const HorizonTableTop20 = ({ title }) => {
    return (
        <div className={styles.horizonTableTop20}>
            <div className={styles.title}>{title}</div>
            <table className={styles.head}>
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>종목명</th>
                        <th>현재가</th>
                        <th>변동</th>
                        <th>등락률</th>
                    </tr>
                </thead>
                <tbody>
                    {userData03.map((data, index) => (
                        <tr key={index}>
                            <td>{data.rank}</td>
                            <td className={styles.dataText}> {data.name}</td>
                            <td className={styles.dataNum}>{data.now.toLocaleString()}</td>
                            <td className={`${styles.dataNum} ${data.rate > 0 ? styles.positive : styles.negative}`}>
                                {data.calc.toLocaleString()}
                            </td>
                            <td className={`${styles.dataNum} ${data.rate > 0 ? styles.positive : styles.negative}`}>
                                {(data.rate * 100).toFixed(2)}%
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
