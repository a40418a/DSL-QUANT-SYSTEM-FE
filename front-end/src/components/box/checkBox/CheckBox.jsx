import React from "react";
import "./checkBox.css";

export const CheckBox = (props) => {
  return <div className="checkBox">
    <label><input type="checkbox"/> {props.text}</label>
  </div>;
};
