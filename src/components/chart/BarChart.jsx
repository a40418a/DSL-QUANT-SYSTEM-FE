//바차트 컴포넌트
import React from 'react';
import Chart from 'react-apexcharts';
import { userData01 } from '../../data/dummyData01';
import styles from './chart.module.css';

export const BarChart = ({ title, dataKey }) => {
    const length = userData01.length; // 데이터 길이 저장

    // 데이터 포맷팅 (ApexCharts에서 사용하는 형식으로 변환)
    const data = userData01.map((entry) => ({
        x: new Date(entry.date).getTime(), // 날짜를 타임스탬프로 변환
        y: entry[dataKey], // 선택된 데이터 키의 값을 y 값으로 설정
    }));

    // ApexCharts 옵션 설정
    const options = {
        chart: {
            type: 'bar', // 차트 타입: 라인 차트
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
            show: false,
        },
        tooltip: {
            x: {
                format: 'yyyy.MM.dd', // 툴팁 날짜 포맷
            },
        },
        annotations: {},
        markers: {
            size: 0, // 마커 크기 (0으로 설정하여 마커 숨김)
        },
        colors: ['gray'],
    };

    return (
        <div className={styles.chart}>
            {/* ApexCharts 컴포넌트 렌더링 */}
            <Chart options={options} series={[{ name: dataKey, data }]} type="bar" height="20%" />
        </div>
    );
};
