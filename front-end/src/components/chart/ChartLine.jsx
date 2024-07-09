import React from 'react';
import Chart from 'react-apexcharts';
import { userData01 } from '../../data/dummyData01';
import './chart.css';

// ChartLine 컴포넌트 정의
export const ChartLine = ({ title }) => {
    const length = userData01.length; // 데이터 길이 저장

    // 범위를 일정 값으로 조절
    const range = 1000;

    // userData01에서 필요한 데이터 추출
    const dates = userData01.map((entry) => entry.date);
    const closePrices = userData01.map((entry) => entry.close);
    const firstDataAvg = closePrices.reduce((acc, cur) => acc + cur, 0) / closePrices.length;

    // 최대값과 최소값 계산
    const maxClose = Math.max(...closePrices);
    const minClose = Math.min(...closePrices);

    // 예시: userData01에서 close 값들의 평균 계산

    // 차트 옵션 설정
    const chartOptions = {
        chart: {
            id: 'basic-line',
        },
        xaxis: {
            categories: dates,
            labels: {
                show: true,
                style: {
                    fontSize: '12px',
                    fontWeight: 400,
                    colors: '#373d3f',
                },
            },
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    fontSize: '12px',
                    fontWeight: 400,
                    colors: '#373d3f',
                },
            },
            axisBorder: {
                show: true,
            },
        },
        colors: [userData01[length - 1].close > firstDataAvg ? 'var(--up-color)' : 'var(--down-color'], // 색깔 변경 조건
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        markers: {
            size: 4,
            colors: [userData01[length - 1].close > firstDataAvg ? 'var(--up-color)' : 'var(--down-color'], // 색깔 변경 조건
            strokeColors: '#fff',
            strokeWidth: 2,
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm',
            },
        },
    };

    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <Chart options={chartOptions} series={[{ data: closePrices }]} type="line" width="100%" height={320} />
        </div>
    );
};
