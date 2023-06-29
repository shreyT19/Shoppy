import React from "react";

import {
  ChartComponent,
  SeriesDirective,
  SeriesCollectionDirective,
  SplineAreaSeries,
  Inject,
  DateTime,
  Legend,
} from "@syncfusion/ej2-react-charts";

import {
  areaCustomSeries,
  areaPrimaryYAxis,
  areaPrimaryXAxis
} from "../../data/dummy";

import { useStateContext } from "../../context/ContextProvider";
import { Header } from "../../components";
const Area = () => {

  const {currentMode} = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24  p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Area" title="Inflation Rate in Percentage" />
    <div className=" w-full">
    <ChartComponent
      id="area-chart"
      height="420px"
      primaryXAxis={areaPrimaryXAxis}
      primaryYAxis={areaPrimaryYAxis}
      chartArea={{border:{width:0}}}
      
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[SplineAreaSeries, Legend,DateTime]} />
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item, index) => {
          return <SeriesDirective key={index} {...item} />;
        })}
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
    </div>
  );
};

export default Area;
