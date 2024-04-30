// 텍스트 버튼 구조
import React from "react";
import { Link } from "react-router-dom";
import "./textBtn.css";

export const TextBtn = (props) => {
  return (
    <div className="textBtn" id={props.id} onClick={props.onClick}>
      <Link to={props.link}>{props.text}</Link>
    </div>
  );
};
