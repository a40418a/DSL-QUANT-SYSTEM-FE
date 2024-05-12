// 상단 참고 주식 자료 구조
import React from "react";
import "./featuredInfo.css";
import { ArrowDown, ArrowUp } from "../emoticon/arrow/Arrow";
import { FeaturedInfoBox } from "../box/featuredInfoBox/FeaturedInfoBox";
import {Chart} from "../chart/chart"
import {userData01} from "../../data/dummyData01";

export const FeaturedInfo = () => {
  return (
    <div className="featured">
      <FeaturedInfoBox
        title="코스피"
        currency="현재가"
        arrow={<ArrowDown />}
        rate="등락률"
        chart={<Chart data={userData01}/>}
        sub="Compared to last month"
      />
      <FeaturedInfoBox
        title="코스닥"
        currency="₩"
        arrow={<ArrowUp />}
        rate="등락률"
        chart={<Chart data={userData01}/>}
        sub="Compared to last month"
      />
      <FeaturedInfoBox
        title="코스피 2000"
        currency="₩"
        arrow={<ArrowUp />}
        rate="등락률"
        chart={<Chart data={userData01}/>}
        sub="Compared to last month"
      />
    </div>
  );
};
