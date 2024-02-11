// 회원가입 정보 입력 박스
import React from "react";
import "./signupInput.css";

export const InfoBox = (props) => {
  return <div className="infoBox">{props.children}</div>;
};

export const InfoFirst = (props) => {
  return (
    <input
      className="infoFirst"
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    ></input>
  );
};

export const InfoMid = (props) => {
  return (
    <input
      className="infoMid"
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    ></input>
  );
};

export const InfoLast = (props) => {
  return (
    <input
      className="infoLast"
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    ></input>
  );
};
