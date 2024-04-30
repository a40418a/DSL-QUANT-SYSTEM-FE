import React from "react";
import "./selectBox.css";

export const SelectBox = (props) => {
  return <div>
    <select className="selectBox">
        <option value="" disabled selected>{props.disabled}</option>
        <option value="">{props.text}</option>
    </select>
  </div>;
};
