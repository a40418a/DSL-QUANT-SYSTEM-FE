import React from "react";
import { FeaturedInfo } from "../../components/featuredInfo/FeaturedInfo";
import { Chart } from "../../components/chart/Chart";
import "./home.css";
import { userData01 } from "../../data/dummyData01";

export const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData01} title="삼성전자 그래프 예시" />
    </div>
  );
};
