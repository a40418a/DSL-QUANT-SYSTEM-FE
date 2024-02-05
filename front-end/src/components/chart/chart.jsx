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
import { userData } from "../../dummyData";

export default function Chart({ title, data }) {
  const firstDataAvg = (userData[0].open + userData[0].close) / 2;
  const maxOpen = Math.max(...userData.map((entry) => entry.open));
  const minOpen = Math.min(...userData.map((entry) => entry.open));
  const maxClose = Math.max(...userData.map((entry) => entry.close));
  const minClose = Math.min(...userData.map((entry) => entry.close));
  const maxHighest = Math.max(...userData.map((entry) => entry.highest));
  const minHighest = Math.min(...userData.map((entry) => entry.highest));
  const maxLowest = Math.max(...userData.map((entry) => entry.lowest));
  const minLowest = Math.min(...userData.map((entry) => entry.lowest));

  // 범위를 일정 값으로 조절
  const range = 1000;

  // const lineColor = (entry, threshold) => {
  //   return entry.value > threshold ? "blue" : "red";
  // };

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={3 / 1}>
        <LineChart data={data}>
          <ReferenceLine strokeDasharray="3 3" y={firstDataAvg} stroke="gray" />
          <XAxis dataKey="date" />
          <YAxis domain={[minLowest - range, maxHighest + range]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="open" stroke="red" />
          <Line type="monotone" dataKey="close" stroke="#005500" />
          <Line type="monotone" dataKey="highest" stroke="#000055" />
          <Line type="monotone" dataKey="lowest" stroke="#555555" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
