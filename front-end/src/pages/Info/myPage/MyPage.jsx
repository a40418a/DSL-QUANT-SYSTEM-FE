import React from "react";
import "./myPage.css";
import { TableVertical } from "../../../components/table/tableVertical/TableVertical";

export const MyPage = () => {
  return (
    <div className="mypage">
      <div className="mypage-title">
        <div className="mypage-title-name">최승아</div>
        <div className="mypage-title-content">님의 마이페이지</div>
      </div>
      <div className="mypage-info">
        <div className="mypage-main-title">회원 개인정보</div>
        <TableVertical/>
      </div>
      <div className="mypage-backtest">
      <div className="mypage-main-title">백테스팅 검색 기록
      <div className="mypage-backtest-title-sub">최근 10개의 기록만 열람할 수 있습니다.</div>
      </div>
        <div className="mypage-main-table"></div>
      </div>
    </div>    
  );
};
