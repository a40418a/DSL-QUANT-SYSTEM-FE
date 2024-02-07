import { ColorBtn } from "../../components/button/ColorBtn/ColorBtn";
import { React, useState } from "react";
import "./signUp.css";
import {
  InfoBox,
  InfoFirst,
  InfoLast,
  InfoMid,
} from "../../components/input/signupInput/SignupInput";

export const SignUp = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [birth, setBirth] = useState("");
  const [phone, setPhone] = useState("");

  const onClickSignUp = () => {
    if (id && pw && pwCheck && name && mail && birth && phone) {
      alert("가입이 완료됐습니다, 로그인화면으로 이동합니다");
      window.location.href = "/signin";
    } else {
      alert("회원정보를 모두 입력하세요");
    }
  };

  return (
    <div className="signUp">
      <div className="signUpTitle">2024 졸업작품 회원가입</div>
      <InfoBox>
        <InfoFirst
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(event) => setId(event.target.value)}
        />
        <InfoMid
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={(event) => setPw(event.target.value)}
        />
        <InfoLast
          type="password"
          placeholder="비밀번호 확인"
          value={pwCheck}
          onChange={(event) => setPwCheck(event.target.value)}
        />
      </InfoBox>
      <InfoBox>
        <InfoFirst
          type="text"
          placeholder="이름"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <InfoMid
          type="text"
          placeholder="이메일"
          value={mail}
          onChange={(event) => setMail(event.target.value)}
        />
        <InfoMid
          type="text"
          placeholder="생년월일 8자리"
          value={birth}
          onChange={(event) => setBirth(event.target.value)}
        />
        <InfoLast
          type="text"
          placeholder="휴대전화번호"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </InfoBox>
      <ColorBtn text="회원가입 후 로그인하기" onClick={onClickSignUp} />
    </div>
  );
};
