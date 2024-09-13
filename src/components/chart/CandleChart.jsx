import React from "react";
import Chart from "react-apexcharts";
import styles from "./chart.module.css";
import "./chart.css";
import { Loading } from "../loading/Loading";

export const CandleChart = ({ title, dataKey, chartData }) => {
    if (!Array.isArray(chartData) || chartData.length === 0) {
        return <Loading />;
    }

    const maxHighest = Math.max(...chartData.map((entry) => entry.high));
    const minLowest = Math.min(...chartData.map((entry) => entry.low));
    const maxVolume = Math.max(...chartData.map((entry) => entry.volume));

    const candleData = chartData.map((entry) => ({
        x: entry.date ? new Date(entry.date).getTime() : new Date().getTime(),
        y: [entry.open, entry.high, entry.low, entry.close],
        meta: { ...entry },
    }));

    const volumeData = chartData.map((entry) => ({
        x: new Date(entry.date).getTime(),
        y: entry.volume,
        meta: { ...entry },
    }));

    const options = {
        chart: {
            type: "candlestick",
            height: "100%",
            animations: {
                enabled: false,
            },
            zoom: {
                enabled: true,
                type: "x",
            },
            toolbar: {
                tools: {
                    selection: true,
                    zoom: true,
                    zoomin: false,
                    zoomout: false,
                    pan: true,
                    reset: true,
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
        yaxis: [
            {
                min: minLowest,
                max: maxHighest,
                tooltip: {
                    enabled: true,
                },
                title: {
                    text: "Price",
                },
            },
            {
                opposite: true,
                max: maxVolume,
                min: 0,
                show: false,
                title: {
                    text: "Volume",
                },
            },
        ],
        grid: {
            row: {
                colors: ["transparent", "transparent"],
                opacity: 0.5,
            },
        },
        tooltip: {
            shared: true,
            custom: function ({ seriesIndex, dataPointIndex, w }) {
                const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex].meta;
                const date = data.date ? new Date(data.date).toLocaleDateString() : "N/A";

                return `<div class="tooltip">
                          <div><strong>Date:</strong> ${date}</div>
                          <div><strong>Open:</strong> ${data.open}</div>
                          <div><strong>Close:</strong> ${data.close}</div>
                          <div><strong>Highest:</strong> ${data.high}</div>
                          <div><strong>Lowest:</strong> ${data.low}</div>
                          <div><strong>Volume:</strong> ${data.volume}</div>
                        </div>`;
            },
        },
        plotOptions: {
            candlestick: {
                wick: {
                    useFillColor: true,
                },
                colors: {
                    upward: "var(--up-color)",
                    downward: "var(--down-color)",
                },
            },
            bar: {
                colors: {
                    ranges: [
                        {
                            from: 0,
                            to: Number.MAX_SAFE_INTEGER,
                            color: "gray",
                        },
                    ],
                },
                strokeColor: "gray",
            },
        },
        grid: {
            show: true,
            borderColor: "#f1f1f1",
            strokeDashArray: 5,
            position: "back",
            row: {
                colors: undefined, // takes an array which will be repeated on rows
                opacity: 0.5,
            },
            column: {
                colors: undefined, // takes an array which will be repeated on columns
                opacity: 0.5,
            },
            padding: {
                top: 10,
                right: 0,
                bottom: 0,
                left: 0,
            },
        },
    };

    return (
        <div className={styles.chart}>
            <Chart
                options={options}
                series={[
                    { name: "Candlestick", type: "candlestick", data: candleData, yAxisIndex: 0 },
                    { name: "Volume", type: "bar", data: volumeData, yAxisIndex: 1 },
                ]}
                type="candlestick"
                height="100%"
            />
        </div>
    );
};
