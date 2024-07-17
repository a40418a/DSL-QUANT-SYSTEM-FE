import React from "react";
import "./tableVertical.css";

export const TableVertical = ({ title,data }) => {
    return(
        <div className="table">
            <div className="tableTitle">{title}</div>
            <table>
  <tr>
    <th className="vertical-h">이름</th>
    <td className="vertical-d">최승아</td>
  </tr>
  <tr>
    <th className="vertical-h">전화번호</th>
    <td className="vertical-d">010-7110-0441</td>
  </tr>
  <tr>
    <th className="vertical-h">생년월일</th>
    <td className="vertical-d">2001.04.18</td>
  </tr>
  <tr>
    <th className="vertical-h">성별</th>
    <td className="vertical-d">여</td>
  </tr>
</table>

        </div>
    )
}