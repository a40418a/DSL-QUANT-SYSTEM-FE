import React from 'react';
import './selectBox.css';

export const SelectBox = ({ options, value, onChange }) => {
    return (
        <select className="selectBox" value={value} onChange={onChange}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};
