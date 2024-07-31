import React from 'react';
import './selectBox.css';

export const SelectBox = (props) => {
    return (
        <select
            className="selectBox"
            disabled={props.disabled}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
        >
            <option value="" disabled>
                {props.placeholder}
            </option>
            {props.options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};
