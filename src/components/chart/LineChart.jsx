import React from "react";
import Chart from "react-apexcharts";
import styles from "./chart.module.css";
import { Loading } from "../loading/Loading";

export const LineChart = ({ title, dataKey, chartData }) => {
    // chartData가 비어있거나 undefined일 때 처리
    if (!Array.isArray(chartData) || chartData.length === 0) {
        return <Loading />;
    }

    const length = chartData.length; // 데이터 길이 저장

    // 각 데이터 항목에서 특정 속성의 최대값과 최소값 계산
    const maxHighest = Math.max(...chartData.map((entry) => entry.high));
    const minLowest = Math.min(...chartData.map((entry) => entry.low));
    const maxClose = Math.max(...chartData.map((entry) => entry.close));
    const minClose = Math.min(...chartData.map((entry) => entry.close));

    // y축 범위를 조절하기 위한 일정 값 설정
    const range = 0.05;

    // 데이터 포맷팅 (ApexCharts에서 사용하는 형식으로 변환)
    const data = chartData.map((entry) => ({
        x: entry.date ? new Date(entry.date).getTime() : new Date().getTime(), // 날짜를 타임스탬프로 변환
        y: entry[dataKey], // 캔들차트 데이터 형식
        meta: { ...entry }, // 메타데이터 추가
    }));

    const options = {
        chart: {
            type: "area",
            height: "100%",
            animations: {
                enabled: false,
            },
            zoom: {
                enabled: true, // 확대/축소 기능 활성화
                type: "x", // 확대/축소 유형: x와 y축 모두
                autoScaleYaxis: true, // 확대 시 y축 자동 스케일링
            },
            toolbar: {
                tools: {
                    selection: true,
                    zoom: true,
                    zoomin: false,
                    zoomout: false,
                    pan: true,
                    reset: true,
                    customIcons: [
                        {
                            icon: '<div class="icon">3M</div>', // 사용자 정의 아이콘 (3개월)
                            index: 1,
                            title: "3 Month",
                            click: function (chart) {
                                chart.zoomX(
                                    new Date(
                                        new Date().setMonth(new Date().getMonth() - 3),
                                    ).getTime(),
                                    new Date().getTime(),
                                );
                            },
                        },
                        {
                            icon: '<div class="icon">1M</div>', // 사용자 정의 아이콘 (1개월)
                            index: 2,
                            title: "1 Month",
                            click: function (chart) {
                                chart.zoomX(
                                    new Date(
                                        new Date().setMonth(new Date().getMonth() - 1),
                                    ).getTime(),
                                    new Date().getTime(),
                                );
                            },
                        },
                        {
                            icon: '<div class="icon">1W</div>', // 사용자 정의 아이콘 (1주일)
                            index: 3,
                            title: "1 Week",
                            click: function (chart) {
                                chart.zoomX(
                                    new Date(
                                        new Date().setDate(new Date().getDate() - 7),
                                    ).getTime(),
                                    new Date().getTime(),
                                );
                            },
                        },
                    ],
                },
            },
            // 최대 확대 범위는 일주일로 설정
            events: {
                zoomed: function (chartContext, { xaxis }) {
                    const minX = xaxis.min;
                    const maxX = xaxis.max;
                    const oneWeek = 7 * 24 * 60 * 60 * 1000; // 1주일을 밀리초로 변환

                    if (maxX - minX < oneWeek) {
                        chartContext.zoomX(minX, minX + oneWeek);
                    }
                },
            },
        },
        title: {
            text: title,
            align: "left",
        },
        xaxis: {
            type: "datetime",
            labels: {
                format: "MM/dd",
            },
        },
        yaxis: {
            min: minLowest - range,
            max: maxHighest + range,
            show: false,
        },
        tooltip: {
            x: {
                format: "yy/MM",
                show: false,
            },
            custom: function ({ seriesIndex, dataPointIndex, w }) {
                const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex].meta;
                const date = data.date ? new Date(data.date).toLocaleDateString() : "N/A";

                return `<div class="tooltip">
                          <div><strong>Date:</strong> ${date}</div>
                          <div><strong>Open:</strong> ${data.open.toLocaleString()}</div>
                          <div><strong>Close:</strong> ${data.close.toLocaleString()}</div>
                          <div><strong>Highest:</strong> ${data.high.toLocaleString()}</div>
                          <div><strong>Lowest:</strong> ${data.low.toLocaleString()}</div>
                          <div><strong>Volume:</strong> ${data.volume.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                        </div>`;
            },
        },
        dataLabels: {
            enabled: false,
        },
        annotations: {
            yaxis: [
                {
                    y: chartData[chartData.length - 2][dataKey],
                    borderColor: "var(--color-3)",
                    strokeDashArray: "var(--stroke-dash-array)",
                },
            ],
        },
        stroke: {
            curve: "straight",
            width: 2,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0,
                stops: [0, 90, 100],
            },
        },
        markers: {
            size: 0,
        },
        colors: [
            chartData[1][dataKey] < chartData[0][dataKey] ? "var(--up-color)" : "var(--down-color)",
        ],
    };

    return (
        <div className={styles.chart}>
            <Chart options={options} series={[{ name: dataKey, data }]} type="area" height="100%" />
        </div>
    );
};

export const LineChartBacktest = ({ dataKey, chartData }) => {
    // chartData가 비어있거나 undefined일 때 처리
    if (!Array.isArray(chartData) || chartData.length === 0) {
        return <Loading />;
    }

    // 데이터 포맷팅 (ApexCharts에서 사용하는 형식으로 변환)
    const data = chartData.map((entry) => ({
        x: entry.id,
        y: entry[dataKey], // 캔들차트 데이터 형식
        meta: { ...entry }, // 메타데이터 추가
    }));

    // profitRate의 최소값과 최대값 계산
    const profitRateValues = chartData.map((item) => item.profitRate);
    const minProfitRate = Math.min(...profitRateValues) - 10; // 최소값 -10
    const maxProfitRate = Math.max(...profitRateValues) + 10; // 최대값 +10

    const options = {
        chart: {
            type: "area",
            height: "100%",
            animations: {
                enabled: false,
            },
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
                // tools: {
                //     selection: false,
                //     zoom: false,
                //     zoomin: false,
                //     zoomout: false,
                //     pan: false,
                //     reset: false,
                // },
            },
        },
        xaxis: {
            type: "numeric",
            labels: {
                show: false,
            },
        },
        yaxis: {
            min: minProfitRate,
            max: maxProfitRate,
            show: false,
            lines: {
                show: true,
            },
            tooltip: {
                enabled: false,
            },
        },
        tooltip: {
            x: {
                show: false,
            },
            custom: function ({ seriesIndex, dataPointIndex, w }) {
                const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex].meta;
                const date = data.backtesting_date
                    ? new Date(data.backtesting_date)
                          .toLocaleString("ko-KR", {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: false,
                          })
                          .replace(",", "") // 콤마 제거
                    : "-";

                return `<div class="tooltip">
                          <div><strong>Time:</strong> ${date}</div>
                          <div><strong>Final Asset:</strong> ${data.finalAsset.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                          <div><strong>Profit:</strong> ${data.profit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>        
                          <div><strong>Number of Trades:</strong> ${data.numberOfTrades.toLocaleString()}</div>
                          <div><strong>Profit Rate:</strong> ${data.profitRate.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%</div>
                          <div><strong>initial_investment:</strong> ${data.initial_investment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                          <div><strong>tick_kind:</strong> ${data.tick_kind}</div>
                          <div><strong>inq_range:</strong> ${data.inq_range}</div>
                          <div><strong>finalCash:</strong> ${data.finalCash.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                          <div><strong>finalBalance:</strong> ${data.finalBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>

                        </div>`;
            },
        },
        dataLabels: {
            enabled: false,
        },
        annotations: {
            yaxis: [
                {
                    y: 0,
                    borderColor: "var(--color-3)",
                    strokeDashArray: "var(--stroke-dash-array)",
                },
            ],
        },
        stroke: {
            curve: "straight",
            width: 2,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0,
                stops: [0, 90, 100],
            },
        },
        markers: {
            size: 0,
        },
        colors: [
            chartData[1][dataKey] < chartData[0][dataKey] ? "var(--up-color)" : "var(--down-color)",
        ],
    };

    return (
        <div className={styles.chart}>
            <Chart options={options} series={[{ name: dataKey, data }]} type="area" height="100%" />
        </div>
    );
};

export const LineChartMulti = ({ dataKey, chartData }) => {
    // chartData가 비어있거나 undefined일 때 처리
    if (!Array.isArray(chartData) || chartData.length === 0) {
        return <Loading />;
    }

    // 데이터 포맷팅 (ApexCharts에서 사용하는 형식으로 변환)
    const data = chartData.reverse().map((entry) => ({
        x: entry.backtesting_date
            ? new Date(entry.backtesting_date).toLocaleDateString("en-US")
            : "N/A", // 날짜를 mm/dd 형식으로 변환
        y: entry[dataKey], // 캔들차트 데이터 형식
        meta: { ...entry }, // 메타데이터 추가
    }));

    // profitRate의 최소값과 최대값 계산
    const profitRateValues = chartData.map((item) => item.finalProfitRate);
    const minProfitRate = Math.min(...profitRateValues) - 10; // 최소값 -10
    const maxProfitRate = Math.max(...profitRateValues) + 10; // 최대값 +10

    const options = {
        chart: {
            type: "area",
            height: "100%",
            animations: {
                enabled: false,
            },
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            type: "numeric",
            labels: {
                show: false,
            },
        },
        yaxis: {
            min: minProfitRate,
            max: maxProfitRate,
            show: false,
            lines: {
                show: true,
            },
            tooltip: {
                enabled: false,
            },
        },
        tooltip: {
            x: {
                show: false,
            },
            custom: function ({ seriesIndex, dataPointIndex, w }) {
                const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex].meta;
                const date = data.backtesting_date
                    ? new Date(data.backtesting_date)
                          .toLocaleString("ko-KR", {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: false,
                          })
                          .replace(",", "") // 콤마 제거
                    : "-";

                return `<div class="tooltip">
                          <div><strong>Time:</strong> ${date}</div>
                          <div><strong>Profit Rate:</strong> ${data.profitRate.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                          <div><strong>Profit Vs Rate:</strong> ${data.profitVsRate.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>        
                          <div><strong>Final Profit Rate:</strong> ${data.finalProfitRate.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                        </div>`;
            },
        },
        dataLabels: {
            enabled: false,
        },
        annotations: {
            yaxis: [
                {
                    y: 0,
                    borderColor: "var(--color-3)",
                    strokeDashArray: "var(--stroke-dash-array)",
                },
            ],
        },
        stroke: {
            curve: "straight",
            width: 2,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0,
                stops: [0, 90, 100],
            },
        },
        markers: {
            size: 0,
        },
        colors: [
            chartData[0][dataKey] < chartData[1][dataKey] ? "var(--up-color)" : "var(--down-color)",
        ],
    };

    return (
        <div className={styles.chart}>
            <Chart options={options} series={[{ name: dataKey, data }]} type="area" height="100%" />
        </div>
    );
};
