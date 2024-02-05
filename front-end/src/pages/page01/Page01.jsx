import React from "react";
import Chart from "../../components/chart/chart";
import "./page01.css";
import { userData } from "../../dummyData";

export default function Page01() {
  return (
    <div className="page01">
      <Chart data={userData} title="Page-01" />
    </div>
  );
}
