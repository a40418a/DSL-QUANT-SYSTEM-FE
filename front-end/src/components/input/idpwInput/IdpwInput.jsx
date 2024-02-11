//로그인 페이지 아이디,비밀번호 입력 박스
import React from "react";
import "./idpwInput.css";

export const IdpwInput = (props) => {
  return (
    <div className="idpwInput">
      <div className="title">{props.name}</div>
      <input
        type={props.type}
        className="input"
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};
