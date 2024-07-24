// 컬러 버튼 구조
import React from 'react';
import { Link } from 'react-router-dom';
import './wideBtn.css';

export const WideBtn = (props) => {
    const handleClick = (event) => {
        if (props.onClick) {
            props.onClick(event); // 클릭 이벤트 상위 컴포넌트로 전달
        }
    };

    return (
        <div className="wideBtn" id={props.id} onClick={props.onClick}>
            {props.text}
        </div>
    );
};
