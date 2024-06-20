// 상단 참고 주식 자료 구조
import React from 'react';
import './featuredInfo.css';
import { ArrowDown, ArrowUp } from '../emoticon/arrow/Arrow';
import { FeaturedInfoBox } from '../box/featuredInfoBox/FeaturedInfoBox';
import { Chart01 } from '../chart/Chart';
import { userData01 } from '../../data/dummyData01';

export const FeaturedInfo = () => {
    return (
        <div className="featured">
            <FeaturedInfoBox
                title="코스피"
                currency="₩"
                price="73,700"
                arrow={<ArrowDown />}
                rate="-1"
                chart={<Chart01 data={userData01} dataKey="close" />}
                sub="Compared to last month"
            />
            <FeaturedInfoBox
                title="코스닥"
                currency="₩"
                price="846.51"
                arrow={<ArrowUp />}
                rate="0.07"
                chart={<Chart01 data={userData01} dataKey="open" />}
                sub="Compared to last month"
            />
            <FeaturedInfoBox
                title="코스피 2000"
                currency="₩"
                price="73,700"
                arrow={<ArrowUp />}
                rate="3"
                chart={<Chart01 data={userData01} dataKey="highest" />}
                sub="Compared to last month"
            />
        </div>
    );
};
