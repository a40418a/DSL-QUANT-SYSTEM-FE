import React from 'react';
import './inputBox.css';

export const InputBox = (props) => {
    return (
        <div>
            <input className="inputBox" type="text" placeholder={props.placeholder} />
        </div>
    );
};
