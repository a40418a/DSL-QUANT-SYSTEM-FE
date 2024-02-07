// 라인그래프
import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { userData01 } from "../../data/dummyData01";

export const Chart = ({ title, data }) => {
  const firstDataAvg = (userData01[0].open + userData01[0].close) / 2;
  const maxOpen = Math.max(...userData01.map((entry) => entry.open));
  const minOpen = Math.min(...userData01.map((entry) => entry.open));
  const maxClose = Math.max(...userData01.map((entry) => entry.close));
  const minClose = Math.min(...userData01.map((entry) => entry.close));
  const maxHighest = Math.max(...userData01.map((entry) => entry.highest));
  const minHighest = Math.min(...userData01.map((entry) => entry.highest));
  const maxLowest = Math.max(...userData01.map((entry) => entry.lowest));
  const minLowest = Math.min(...userData01.map((entry) => entry.lowest));

  const length = userData01.length;

  // 범위를 일정 값으로 조절
  const range = 1000;

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={3 / 1}>
        <LineChart data={data}>
          <ReferenceLine strokeDasharray="3 3" y={firstDataAvg} stroke="gray" />
          <XAxis dataKey="date" />
          <YAxis domain={[minLowest - range, maxHighest + range]} />
          <Tooltip />
          {/* <Legend /> */}
          <Line
            type="linear"
            dataKey="close"
            stroke={
              userData01[length - 1].close > firstDataAvg ? "red" : "blue"
            }
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export const MaxClose = () => {
  return Math.max(...userData01.map((entry) => entry.close));
};

export const MinClose = () => {
  return Math.min(...userData01.map((entry) => entry.close));
};
