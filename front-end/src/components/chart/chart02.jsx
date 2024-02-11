// 바 그래프
import React from "react";
import "./chart02.css";
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

export const Chart02 = ({ title, data }) => {
  const rootStyles = getComputedStyle(document.documentElement);
  const backgroundColorDark = rootStyles.getPropertyValue(
    "--background-color-dark"
  );
  const strokeDasharray = rootStyles.getPropertyValue("--stroke-dash-array");

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <BarChart className="barChart" data={data}>
          <CartesianGrid strokeDasharray={strokeDasharray} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="change" fill={backgroundColorDark} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
