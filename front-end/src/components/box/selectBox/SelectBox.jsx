import React from 'react';
import './selectBox.css';

export const SelectBox = (props) => {
    return (
        <div>
            <select className="selectBox" disabled={props.disabled}>
                <option value="" disabled selected>
                    {props.placeholder}
                </option>
                {props.options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
