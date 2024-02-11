// 바 그래프
// 거래량을 기준
import React from "react";
import "./chart03.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

export const Chart03 = ({ title, data }) => {
  const rootStyles = getComputedStyle(document.documentElement);
  const upwardColor = rootStyles.getPropertyValue("--upward-color");
  const downwardColor = rootStyles.getPropertyValue("--downward-color");
  const strokeDasharray = rootStyles.getPropertyValue("--stroke-dash-array");

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <BarChart className="barChart" data={data}>
          <CartesianGrid strokeDasharray={strokeDasharray} />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="volume">
            {/* 변화량을 기준으로 색깔 지정 */}
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.change > 0 ? upwardColor : downwardColor}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
