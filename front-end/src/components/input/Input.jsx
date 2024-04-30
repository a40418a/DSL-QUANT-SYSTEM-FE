import React from "react";
import "./input.css";

export const InputHalf = (props) => {
  return (
      <input
        type={props.type}
        className="inputHalf"
        onChange={props.onChange}
        value={props.value}
      />
  );
};

export const InputFull = (props) => {
    return (
        <input
          type={props.type}
          className="inputFull"
          onChange={props.onChange}
          value={props.value}
        />
    );
  };
  