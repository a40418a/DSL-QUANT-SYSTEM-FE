import React from 'react';
import styles from './verticalTable.module.css';

export const VerticalTable = ({ title, data }) => {
    return (
        <div className={styles.verticalTable}>
            <div className={styles.title}>{title}</div>
            <table className={styles.table}>
                <tr>
                    <th className={styles.head}>이름</th>
                    <td className={styles.body}>{data.name}</td>
                </tr>
                <tr>
                    <th className={styles.head}>전화번호</th>
                    <td className={styles.body}>{data.phonenumber}</td>
                </tr>
                <tr>
                    <th className={styles.head}>생년월일</th>
                    <td className={styles.body}>{data.birth}</td>
                </tr>
                <tr>
                    <th className={styles.head}>성별</th>
                    <td className={styles.body}>{data.gender}</td>
                </tr>
            </table>
        </div>
    );
};
