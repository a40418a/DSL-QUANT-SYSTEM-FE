// 거래량 데이터
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
  const barColor = (dataPoint) => {
    return dataPoint.change > 0 ? "red" : "blue";
  };

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={1 / 1}>
        <BarChart className="barChart" data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="volume" fill="gray" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
