import React from "react";
import "./myPageCheck.css";
import { InputHalf } from "../../../components/input/Input";
import { ColorBtn } from "../../../components/button/ColorBtn/ColorBtn";

export const MyPageCheck = () => {
  return (
      <div className="mypagecheck">
        <div className="mypagecheck-wrapper">
        <div className="mypagecheck-title">본인 여부 확인</div>
        <div className="mypagecheck-input-wrapper">
          <InputHalf id="inputHalf" type="text"/>
          <div className="mypagecheck-explain">개인정보를 확인하기 위해서 생년월일을 입력해주세요(예: 010418)</div>
        </div>
        <ColorBtn id="colorBtn"text="확인" link="/mypage"/>
      </div>
        </div>
  );
};