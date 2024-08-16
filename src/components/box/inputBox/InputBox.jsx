import React from 'react';
import styles from './inputBox.module.css';

export const InputBox = ({ type, placeholder, name, value, onChange }) => {
    return (
        <input
            className={styles.inputBox}
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
        />
    );
};
