import React from "react";
import { FeaturedInfo } from "../../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { TableHorizon } from "../../../components/table/tableHorizon/TableHorizon";

export const Home = () => {
  return (
    <div className="home">
          <FeaturedInfo className="container-featuredinfo"/>
          <div className="info">
            <div className="backtest-chart">가장 최근에 백테스팅 진행한 종목</div>
            <TableHorizon className="tableHorizon" title={"TOP 20 종목"}/>
          </div>
    </div>
  );
};
