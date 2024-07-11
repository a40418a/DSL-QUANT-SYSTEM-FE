//상단 타이틀 박스
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./footbar.css";

export const Footbar = () => {
  const [activePage, setActivePage] = useState("");
  const location = useLocation();

  useEffect(() => { //즉각적인 반응이 필요할 때 쓰기, state는 바로바로 안 됨ㅜㅜ
    // useLocation의 pathname을 기반으로 현재 페이지 설정
    setActivePage(location.pathname);
  }, [location]);

  return (
    <div className="footbar">
        <div className="footbarLeft">
            <div>DSL QUANT</div>
            <div>Contact Us</div>
            <div>M | winnaba61@gmail.com</div>
            <div>T | 010-7110-0441</div>
        </div>
        <div className="footbarRight">
            <div>개인정보약관</div>
            <div>이용약관</div>
        </div>
    </div>
  );
};
