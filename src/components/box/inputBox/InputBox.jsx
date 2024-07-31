import React from 'react';
import './inputBox.css';

export const InputBox = (props) => {
    return (
        <input
            className="inputBox"
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
        />
    );
};

export const InputHalfBox = (props) => {
    return (
        <input
            className="inputHalfBox"
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
        />
    );
};
