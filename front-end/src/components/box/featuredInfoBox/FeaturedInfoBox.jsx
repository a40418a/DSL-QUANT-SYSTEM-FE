//주식 참고 자료 박스
import React from "react";
import "./featuredInfoBox.css";

export const FeaturedInfoBox = (props) => {
  return (
    <div className="featuredBox">
      <span className="featuredTitle">{props.title}</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">
          {props.currency} {props.price}
        </span>
        <span className="featuredMoneyRate">
          {props.rate}
          {props.arrow}
        </span>
      </div>
      <span className="featuredSub">{props.sub}</span>
    </div>
  );
};
