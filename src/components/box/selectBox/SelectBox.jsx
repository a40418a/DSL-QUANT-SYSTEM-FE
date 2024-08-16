import React from 'react';
import styles from './selectBox.module.css';

export const SelectBox = ({ disabled, name, value, onChange, placeholder, options }) => {
    return (
        <select
            className={styles.selectBox}
            disabled={disabled}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        >
            <option value="" disabled>
                {placeholder}
            </option>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};
