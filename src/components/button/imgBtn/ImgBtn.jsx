import React from "react";
import styles from "./imgBtn.module.css";

export const ImgBtn = ({ onClick, id, imageSrc, altText }) => {
    const handleClick = (event) => {
        if (onClick) {
            onClick(event); // 클릭 이벤트 상위 컴포넌트로 전달
        }
    };

    return (
        <div className={styles.imgBtn} id={id} onClick={handleClick}>
            <img src={imageSrc} alt={altText} />
        </div>
    );
};
