// 컬러 버튼 구조
import React from 'react';
import { Link } from 'react-router-dom';
import './wideBtn.css';

export const WideBtn = (props) => {
    return (
        <div className="wideBtn" id={props.id} onClick={props.onClick}>
            <Link to={props.link}>
                {props.logo}
                {props.text}
            </Link>
        </div>
    );
};
