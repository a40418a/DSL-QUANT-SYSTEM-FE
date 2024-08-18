import React from 'react';
import styles from './loading.module.css';

export const Loading = () => {
    return (
        <div className={styles.loading}>
            로딩 중입니다...
            <div className={styles.box}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};
