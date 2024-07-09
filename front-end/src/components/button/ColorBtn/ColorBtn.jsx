import React from 'react';
import { Link } from 'react-router-dom';
import './colorBtn.css';

export const ColorBtn = (props) => {
    return (
        <Link to={props.link} className="colorBtn" id={props.id} onClick={props.onClick}>
            {props.text}
        </Link>
    );
};
