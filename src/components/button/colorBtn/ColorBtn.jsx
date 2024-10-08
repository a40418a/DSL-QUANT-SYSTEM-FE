import React from "react";
import { Link } from "react-router-dom";
import styles from "./colorBtn.module.css";

export const ColorBtn = ({ onClick, id, text }) => {
    const handleClick = (event) => {
        if (onClick) {
            onClick(event); // 클릭 이벤트 상위 컴포넌트로 전달
        }
    };

    return (
        <div className={styles.colorBtn} id={id} onClick={handleClick}>
            {text}
        </div>
    );
};
