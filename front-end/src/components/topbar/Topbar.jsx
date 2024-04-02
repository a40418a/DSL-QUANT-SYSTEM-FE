//상단 타이틀 박스
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./topbar.css";

export const Topbar = () => {
  const [activePage, setActivePage] = useState("");
  const location = useLocation();

  useEffect(() => {
    // useLocation의 pathname을 기반으로 현재 페이지 설정
    setActivePage(location.pathname);
  }, [location]);

  if(location.pathname!=="/")
  {
    return (
      <div className="topbar">
        <div className="topbar-wrapper">
          <div className="topbar-title">
            <Link to="/home">DSL QUANT</Link>
          </div>
            <ul className="topbar-menu-wrapper">
              <li
                className={`topbar-menu ${activePage === "/home" ? "active" : ""}`}
              >
                <Link to="/home">현 주식장</Link>
              </li>
              <li
                className={`topbar-menu ${activePage === "/strategy1" ? "active" : ""}`}
              >
                <Link to="/strategy1">전략설정</Link>
              </li>
              <li
                className={`topbar-menu ${activePage === ("/mypagecheck" &&"/mypage") ? "active" : ""}`}
              >
                <Link to="/mypagecheck">마이페이지</Link>
              </li>
            </ul>
        </div>
      </div>
    );
  }
  return null;

  
};

export default Topbar;