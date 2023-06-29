import React from "react";

import DoughNut from "../../components/Charts/Pie";
import { pieChartData } from "../../data/dummy";
import { Header } from "../../components";
const Pie = () => {
  return (
    <div className="m-4 md:m-10 mt-24  p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Charts" title="Line" />
      <div className="w-full">
        <DoughNut
          legendVisiblity
          height="full"
          id="chart-pie"
          data={pieChartData}
        />
      </div>
    </div>
  );
};

export default Pie;
