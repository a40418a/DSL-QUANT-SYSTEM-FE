import React, { useState } from "react";
import "./signIn.css";
import { ColorBtn } from "../../components/button/ColorBtn/ColorBtn";
import { IdpwInput } from "../../components/input/idpwInput/IdpwInput";

export const SignIn = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onClickLogin = () => {
    if (!id || !pw) {
      alert("ID 또는 PW를 확인하세요");
    } else {
      alert("환영합니다");
      // 홈 화면으로 이동
      window.location.href = "/"; // 또는 필요한 경로로 변경
    }
  };

  return (
    <div className="signIn">
      <div className="signInTitle">2024 졸업작품</div>
      <IdpwInput
        name="ID"
        type="text"
        value={id}
        onChange={(event) => setId(event.target.value)}
      />
      <IdpwInput
        name="PW"
        type="password"
        value={pw}
        onChange={(event) => setPw(event.target.value)}
      />
      <ColorBtn text="LOG IN" id="loginBtn" onClick={onClickLogin} />
      <ColorBtn link="/signup" text="SIGN UP" id="signupBtn" />
    </div>
  );
};
