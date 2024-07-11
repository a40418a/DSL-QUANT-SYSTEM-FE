//캔들스틱 차트 컴포넌트
import React from 'react';
import Chart from 'react-apexcharts';
import { userData01 } from '../../data/dummyData01';
import './chart.css';

export const Chart04 = ({ title, dataKey }) => {
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

    // y축 범위를 조절하기 위한 일정 값 설정
    const range = 1000;

    // 데이터 포맷팅 (ApexCharts에서 사용하는 형식으로 변환)
    const data = userData01.map((entry) => ({
        x: new Date(entry.date).getTime(), // 날짜를 타임스탬프로 변환
        y: [entry.open, entry.close, entry.lowest, entry.highest], // 캔들차트 데이터 형식
    }));

    // ApexCharts 옵션 설정
    const options = {
        chart: {
            type: 'candlestick', // 차트 타입: 캔들차트
            height: '100%', // 차트 높이
            animations: {
                enabled: false, // 애니메이션 비활성화
            },
        },
        title: {
            text: title, // 차트 제목
            align: 'left', // 제목 정렬: 중앙
        },
        xaxis: {
            type: 'datetime', // x축 타입: 날짜/시간
            labels: {
                format: 'MM/dd', // 날짜 형식 설정
            },
        },
        yaxis: {
            min: minLowest - range, // y축 최소값
            max: maxHighest + range, // y축 최대값
            show: false,
        },
        tooltip: {
            x: {
                format: 'yyyy.MM.dd', // 툴팁 날짜 포맷
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
        },
    };

    return (
        <div className="chart">
            {/* ApexCharts 컴포넌트 렌더링 */}
            <Chart options={options} series={[{ data }]} type="candlestick" height="100%" />
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
