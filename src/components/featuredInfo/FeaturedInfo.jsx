// 상단 참고 주식 자료 구조
import React from 'react';
import './featuredInfo.css';
import { ArrowDown, ArrowUp } from '../emoticon/Arrow';
import { ChartBox } from '../box/chartBox/ChartBox';
import { LineChart } from '../chart/lineChart';
import { userData01 } from '../../data/dummyData01';

export const FeaturedInfo = () => {
    return (
        <div className="featured">
            <div className="featured-box">
                <ChartBox
                    title="코스피"
                    currency="₩"
                    price="73,700"
                    arrow={<ArrowDown />}
                    rate="-1"
                    chart={<LineChart data={userData01} dataKey="close" />}
                    sub="Compared to last month"
                />
            </div>
            <div className="featured-box">
                <ChartBox
                    className="featured-box"
                    title="코스닥"
                    currency="₩"
                    price="846.51"
                    arrow={<ArrowUp />}
                    rate="0.07"
                    chart={<LineChart data={userData01} dataKey="open" />}
                    sub="Compared to last month"
                />
            </div>

            <div className="featured-box">
                <ChartBox
                    className="featured-box"
                    title="코스피 2000"
                    currency="₩"
                    price="73,700"
                    arrow={<ArrowUp />}
                    rate="3"
                    chart={<LineChart data={userData01} dataKey="highest" />}
                    sub="Compared to last month"
                />
            </div>
        </div>
    );
};
