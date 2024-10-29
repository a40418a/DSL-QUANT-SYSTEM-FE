import React from "react";
import styles from "./notFound.module.css";
import { Home } from "../../../components/emoticon/Home";

export const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <div className={styles.IconWrapper}>
                <div className={styles.IconText}>404</div>
            </div>
            <div className={styles.TextWrapper}>
                <div className={styles.Text1}>페이지를 찾을 수 없습니다.</div>
            </div>
            <a href="/home/" className={styles.BtnWrapper}>
                <Home />
                <div>홈으로</div>
            </a>
        </div>
    );
};
