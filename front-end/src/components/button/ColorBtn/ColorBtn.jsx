import React from 'react';
import { Link } from 'react-router-dom';
import './colorBtn.css';

export const ColorBtn = (props) => {
    const handleClick = (event) => {
        if (props.onClick) {
            props.onClick(event); // 클릭 이벤트 상위 컴포넌트로 전달
        }
    };

    return (
        <Link to={props.link} className="colorBtn" id={props.id} onClick={handleClick}>
            {props.text}
        </Link>
    );
};
