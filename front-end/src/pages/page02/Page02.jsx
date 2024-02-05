import React from "react";
import Chart02 from "../../components/chart/chart02";
import "./page02.css";
import { userData02 } from "../../dummyData02";

export default function Page02() {
  return (
    <div className="page02">
      <Chart02 data={userData02} title="Page-02" />
    </div>
  );
}
