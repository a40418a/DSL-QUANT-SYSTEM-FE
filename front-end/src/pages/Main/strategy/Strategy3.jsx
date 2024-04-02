import React from "react";
import "./strategy.css";
import { ColorBtn } from "../../../components/button/ColorBtn/ColorBtn";
import { CheckBox } from "../../../components/box/checkBox/CheckBox";
import { SelectBox } from "../../../components/box/selectBox/SelectBox";

export const Strategy3 = () => {
  return (
    <div className="strategy">
      <div className="strategy-title-wrapper">
        <div className="strategy-essential">[필수]</div>
        <div className="strategy-title">백테스트 설정</div>
      </div>
      <div className="strategy-subtitle-wrapper">
        <div className="strategy-subtitle">초기 투자 금액</div>
      </div>
      <SelectBox disabled="초기 투자 금액을 입력해주세요"/>
      <div className="strategy-subtitle-wrapper">
        <div className="strategy-subtitle">거래 수수료</div>
      </div>
      <SelectBox disabled="0 %"/>
      <div className="strategy-explain">0~100까지 입력할 수 있습니다.</div>
      <div className="strategy-title-wrapper">
        <div className="strategy-essential">[필수]</div>
        <div className="strategy-title">리밸런싱 설정</div>
      </div>
      <div className="strategy-subtitle-wrapper">
        <div className="strategy-subtitle">리밸런싱 기간</div>
      </div>
      <SelectBox disabled="리밸런싱 기간을 선택해주세요."/>
      <div className="strategy-subtitle-wrapper">
        <div className="strategy-subtitle">초기 투자 금액</div>
      </div>
      <SelectBox disabled="동일 비중"/>
      <div className="strategy-subtitle-wrapper">
        <div className="strategy-subtitle">종목 수</div>
      </div>
      <SelectBox disabled="20"/>
      <div className="strategy-explain">0~100까지 입력할 수 있습니다.</div>
      <div className="strategy-subtitle-wrapper">
        <div className="strategy-subtitle">마켓 타이밍 설정</div>
      </div>
      <div className="strategy-check-group">
        <div className="strategy-check-group-row">
          <CheckBox text="매크로 마켓 타이밍"/>
          <CheckBox text="재진입 마켓 타이밍"/>
        </div>
      </div>
      <div className="strategy-btn-wrapper">
        <ColorBtn id="colorBtn-prev"text="< 이전" link="/strategy2"/>
        <ColorBtn id="colorBtn-next"text="백테스트" link="/result"/>
      </div>
    </div>
  );
};