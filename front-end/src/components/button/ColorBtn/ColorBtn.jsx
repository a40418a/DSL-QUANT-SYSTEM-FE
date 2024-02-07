import React from "react";
import { Link } from "react-router-dom";
import "./colorBtn.css";

export const ColorBtn = (props) => {
  return (
    <div className="colorBtn" id={props.id} onClick={props.onClick}>
      <Link to={props.link}>{props.text}</Link>
    </div>
  );
};
