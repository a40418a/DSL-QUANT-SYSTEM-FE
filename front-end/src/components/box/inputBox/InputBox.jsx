import React from 'react';
import './inputBox.css';

export const InputBox = (props) => {
    return (
        <div>
            <input className="inputBox" type={props.type} placeholder={props.placeholder} />
        </div>
    );
};
