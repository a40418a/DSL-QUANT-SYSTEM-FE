import React from "react";
import { Chart, MaxClose, MinClose } from "../../components/chart/Chart";
import "./page01.css";
import { userData01 } from "../../data/dummyData01";

export const Page01 = () => {
  return (
    <div className="page01">
      <Chart data={userData01} title="Page-01" />
    </div>
  );
};
