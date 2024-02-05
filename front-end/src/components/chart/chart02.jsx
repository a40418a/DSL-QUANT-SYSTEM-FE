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

export default function Chart02({ title, data }) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <BarChart className="barChart" data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="change" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
