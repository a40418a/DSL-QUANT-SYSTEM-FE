import React from 'react';
import './imgBtn.css';

export const ImageBtn = (props) => {
    const handleClick = (event) => {
        if (props.onClick) {
            props.onClick(event); // 클릭 이벤트 상위 컴포넌트로 전달
        }
    };

    return (
        <div className="imgBtn" id={props.id} onClick={handleClick}>
            <img src={props.imageSrc} alt={props.altText} />
        </div>
    );
};
