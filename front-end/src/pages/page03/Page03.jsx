import React from "react";
import { Chart03 } from "../../components/chart/Chart03";
import "./page03.css";
import { userData01 } from "../../data/dummyData01";

export const Page03 = () => {
  return (
    <div className="page03">
      <Chart03 data={userData01} title="Page-03" />
    </div>
  );
};
