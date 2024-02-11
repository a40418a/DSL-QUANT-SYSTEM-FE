// 라인그래프
// 종가 기준(마지막날이 기준선을 기준으로 색깔 변경)
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

  const rootStyles = getComputedStyle(document.documentElement);
  const upwardColor = rootStyles.getPropertyValue("--upward-color");
  const downwardColor = rootStyles.getPropertyValue("--downward-color");
  const strokeDasharray = rootStyles.getPropertyValue("--stroke-dash-array");
  const strokeColor = rootStyles.getPropertyValue("--stroke-color");
  const lineType = rootStyles.getPropertyValue("--line-type");

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={3 / 1}>
        {/* 차트 크기 설정*/}
        <LineChart data={data}>
          {/* 기준선 */}
          <ReferenceLine
            strokeDasharray={strokeDasharray}
            y={firstDataAvg}
            stroke={strokeColor}
          />
          <XAxis dataKey="date" /> {/*x축 값*/}
          <YAxis domain={[minLowest - range, maxHighest + range]} />
          {/*y축 값(범위 지정) */}
          <Tooltip /> {/*데이터레이블에 커서를 갖다댈 때 보일 것인지 */}
          <Line
            type={lineType}
            dataKey="close"
            stroke={
              userData01[length - 1].close > firstDataAvg
                ? upwardColor
                : downwardColor
            } //마지막날과 기준선을 기준으로 색깔 변경
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
