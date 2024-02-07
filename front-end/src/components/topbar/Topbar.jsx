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

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/">2024 졸업작품</Link>
        </div>
        <div className="topMenu">
          <ul className="menuCategory">
            <li
              className={`menuPage ${activePage === "/page01" ? "active" : ""}`}
            >
              <Link to="/page01">Page-01</Link>
            </li>
            <li
              className={`menuPage ${activePage === "/page02" ? "active" : ""}`}
            >
              <Link to="/page02">Page-02</Link>
            </li>
            <li
              className={`menuPage ${activePage === "/page03" ? "active" : ""}`}
            >
              <Link to="/page03">Page-03</Link>
            </li>
            <li
              className={`menuPage ${activePage === "/page04" ? "active" : ""}`}
            >
              <Link to="/page04">Page-04</Link>
            </li>
          </ul>
        </div>
        <div className="topRight">
          <Link to="/signin">로그인</Link>
        </div>
      </div>
    </div>
  );
};
