import React from 'react';
import styles from './verticalTable.module.css';

export const VerticalTable = ({ title, data }) => {
    return (
        <div className={styles.verticalTable}>
            <div className={styles.title}>{title}</div>
            <table className={styles.table}>
                <tr>
                    <th className={styles.head}>이름</th>
                    <td className={styles.body}>최승아</td>
                </tr>
                <tr>
                    <th className={styles.head}>전화번호</th>
                    <td className={styles.body}>010-7110-0441</td>
                </tr>
                <tr>
                    <th className={styles.head}>생년월일</th>
                    <td className={styles.body}>2001.04.18</td>
                </tr>
                <tr>
                    <th className={styles.head}>성별</th>
                    <td className={styles.body}>여</td>
                </tr>
            </table>
        </div>
    );
};
