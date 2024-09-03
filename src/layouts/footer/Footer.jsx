import React from 'react';
import styles from './footer.module.css';

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.left}>
                <div>DSL QUANT</div>
                <div>Contact Us</div>
                <div>M | winnaba61@gmail.com</div>
                <div>T | 010-7110-0441</div>
            </div>
            <div className={styles.right}>
                <a href="/개인정보처리방침.html" target="_blank">
                    개인정보처리방침
                </a>
                <a href="/이용약관.html" target="_blank">
                    이용약관
                </a>
            </div>
        </div>
    );
};
