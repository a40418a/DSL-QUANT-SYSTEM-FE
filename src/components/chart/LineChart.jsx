import React from 'react';
import Chart from 'react-apexcharts';
import { userData01 } from '../../data/dummyData01';
import './chart.css';

// Chart01 컴포넌트 정의
export const LineChart = ({ title, dataKey }) => {
    const length = userData01.length; // 데이터 길이 저장

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
        y: entry[dataKey], // 선택된 데이터 키의 값을 y 값으로 설정
    }));

    // ApexCharts 옵션 설정
    const options = {
        chart: {
            type: 'area', // 차트 타입을 'area'로 변경
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
        dataLabels: {
            enabled: false, // 데이터 레이블 비활성화
        },
        annotations: {
            yaxis: [
                {
                    y: userData01[length - 2][dataKey], // 기준선 위치 (두 번째 마지막 데이터 값)
                    borderColor: 'var(--color-3)', // 기준선 색상
                    strokeDashArray: 'var(--stroke-dash-array)', // 기준선 스타일
                },
            ],
        },
        stroke: {
            curve: 'straight', // 선의 곡선 타입 설정
            width: 2, // 선 두께
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0,
                stops: [0, 90, 100],
            },
        },
        markers: {
            size: 0, // 마커 크기 (0으로 설정하여 마커 숨김)
        },
        colors: [
            // 라인 색상 결정 (마지막 데이터 값과 비교하여 상승/하락 색상 선택)
            userData01[length - 2][dataKey] < userData01[length - 1][dataKey] ? 'var(--up-color)' : 'var(--down-color)',
        ],
    };

    return (
        <div className="chart">
            {/* ApexCharts 컴포넌트 렌더링 */}
            <Chart options={options} series={[{ name: dataKey, data }]} type="area" height="100%" />
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
