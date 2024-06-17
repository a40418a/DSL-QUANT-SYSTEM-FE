// 라인그래프
// 종가 기준(마지막날이 기준선을 기준으로 색깔 변경)
import React from 'react';
import './chart.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import { userData01 } from '../../data/dummyData01';

export const Chart = ({ title, dataKey, data }) => {
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
    const upwardColor = rootStyles.getPropertyValue('--up-color');
    const downwardColor = rootStyles.getPropertyValue('--down-color');
    const strokeDasharray = rootStyles.getPropertyValue('--stroke-dash-array');
    const strokeColor = rootStyles.getPropertyValue('--stroke-color');
    const lineType = rootStyles.getPropertyValue('--line-type');

    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer>
                {/* 차트 크기 설정*/}
                <LineChart data={data}>
                    {/* 기준선 */}
                    <ReferenceLine
                        strokeDasharray={strokeDasharray}
                        y={userData01[length - 2][dataKey]}
                        stroke={strokeColor}
                    />
                    <XAxis dataKey="date" hide={true} /> {/*x축 값*/}
                    <YAxis domain={[minLowest - range, maxHighest + range]} hide={true} />
                    {/*y축 값(범위 지정) */}
                    <Tooltip
                        content={({ payload }) => {
                            if (payload && payload.length > 0) {
                                const data = payload[0].payload;
                                return (
                                    <div className="custom-tooltip">
                                        <p>{`Date: ${data.date}`}</p>
                                        <p>{`Close: ${data.close}`}</p>
                                        <p>{`Open: ${data.open}`}</p>
                                        <p>{`Highest: ${data.highest}`}</p>
                                        <p>{`Lowest: ${data.lowest}`}</p>
                                        <p>{`Volume: ${data.volume}`}</p>
                                        <p>{`Change: ${data.change}`}</p>
                                    </div>
                                );
                            }
                        }}
                    />
                    <Line
                        type={lineType}
                        dataKey={dataKey}
                        stroke={
                            userData01[length - 2][dataKey] < userData01[length - 1][dataKey]
                                ? upwardColor
                                : downwardColor
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
