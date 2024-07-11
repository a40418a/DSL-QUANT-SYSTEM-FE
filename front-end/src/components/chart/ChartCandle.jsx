import React from 'react';
import Chart from 'react-apexcharts';
import { userData01 } from '../../data/dummyData01';
import './chart.css';

export const ChartCandle = ({ title, dataKey }) => {
    const length = userData01.length;

    // 각 데이터 항목에서 특정 속성의 최대값과 최소값 계산
    const maxOpen = Math.max(...userData01.map((entry) => entry.open));
    const minOpen = Math.min(...userData01.map((entry) => entry.open));
    const maxClose = Math.max(...userData01.map((entry) => entry.close));
    const minClose = Math.min(...userData01.map((entry) => entry.close));
    const maxHighest = Math.max(...userData01.map((entry) => entry.highest));
    const minHighest = Math.min(...userData01.map((entry) => entry.highest));
    const maxLowest = Math.max(...userData01.map((entry) => entry.lowest));
    const minLowest = Math.min(...userData01.map((entry) => entry.lowest));
    const maxVolume = Math.max(...userData01.map((entry) => entry.volume)); // 거래량 최대값

    // y축 범위를 조절하기 위한 일정 값 설정
    const range = 1000;

    // 데이터 포맷팅 (ApexCharts에서 사용하는 형식으로 변환)
    const candleData = userData01.map((entry) => ({
        x: new Date(entry.date).getTime(), // 날짜를 타임스탬프로 변환
        y: [entry.open, entry.close, entry.lowest, entry.highest], // 캔들차트 데이터 형식
        meta: { ...entry }, // 메타데이터 추가
    }));

    const volumeData = userData01.map((entry) => ({
        x: new Date(entry.date).getTime(), // 날짜를 타임스탬프로 변환
        y: entry.volume, // 거래량 데이터
        meta: { ...entry }, // 메타데이터 추가
    }));

    // ApexCharts 옵션 설정
    const options = {
        chart: {
            type: 'candlestick', // 차트 타입: 캔들차트
            height: '100%', // 차트 높이
            animations: {
                enabled: false, // 애니메이션 비활성화
            },
            zoom: {
                enabled: true, // 확대/축소 기능 활성화
                type: 'x', // 확대/축소 유형: x와 y축 모두
                autoScaleYaxis: true, // 확대 시 y축 자동 스케일링
            },
        },
        title: {
            text: title, // 차트 제목
            align: 'left', // 제목 정렬: 왼쪽
        },
        xaxis: {
            type: 'datetime', // x축 타입: 날짜/시간
            labels: {
                format: 'MM/dd', // 날짜 형식 설정
            },
        },
        yaxis: [
            {
                min: minLowest - range, // y축 최소값
                max: maxHighest + range, // y축 최대값
                show: false,
                tooltip: {
                    enabled: true,
                },
            },
            {
                opposite: true,
                show: false,
                max: maxVolume * 20, // 거래량 y축 최대값 설정
                min: 0,
            },
        ],
        tooltip: {
            shared: true, // 툴팁 공유
            x: {
                format: 'yyyy.MM.dd', // 툴팁 날짜 포맷
            },
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex].meta;
                return `<div class="tooltip-box">
                          <div><strong>Date:</strong> ${new Date(data.date).toLocaleDateString()}</div>
                          <div><strong>Open:</strong> ${data.open}</div>
                          <div><strong>Close:</strong> ${data.close}</div>
                          <div><strong>Highest:</strong> ${data.highest}</div>
                          <div><strong>Lowest:</strong> ${data.lowest}</div>
                          <div><strong>Volume:</strong> ${data.volume}</div>
                          <div><strong>Change:</strong> ${(data.change * 100).toFixed(2)}%</div>
                        </div>`;
            },
        },
        plotOptions: {
            candlestick: {
                wick: {
                    useFillColor: true, // 심지 색상 채우기 여부
                },
                colors: {
                    upward: 'var(--up-color)', // 상승 시 색상
                    downward: 'var(--down-color)', // 하락 시 색상
                },
            },
            bar: {
                colors: {
                    ranges: [
                        {
                            from: 0,
                            to: Number.MAX_SAFE_INTEGER,
                            color: 'gray',
                        },
                    ],
                },
                strokeColor: 'gray',
            },
        },
    };

    return (
        <div className="chart">
            {/* ApexCharts 컴포넌트 렌더링 */}
            <Chart
                options={options}
                series={[
                    { name: 'Candlestick', type: 'candlestick', data: candleData },
                    { name: 'Volume', type: 'bar', data: volumeData, yAxisIndex: 1 },
                ]}
                type="candlestick"
                height="100%"
            />
        </div>
    );
};

// 최대 종가 계산 함수
export const MaxClose = () => {
    return Math.max(...userData01.map((entry) => entry.close));
};

// 최소 종가 계산 함수
export const MinClose = () => {
    return Math.min(...userData01.map((entry) => entry.close));
};
