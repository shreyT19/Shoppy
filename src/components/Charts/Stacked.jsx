import React from "react";
import {
  ChartComponent,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
  SeriesCollectionDirective,
} from "@syncfusion/ej2-react-charts";

import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";

import { useStateContext } from "../../context/ContextProvider";

const Stacked = ({ width, height }) => {

  const {currentMode} = useStateContext();

  return (
    <ChartComponent
      height={height}
      width={width}
      
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{enable:true}}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{background:"white"}}
    >
      <Inject
        services={[Legend, Category, StackingColumnSeries, Tooltip]}
      ></Inject>
      <SeriesCollectionDirective>
        {
          stackedCustomSeries.map((item,index)=>{
            return <SeriesDirective key={index} {...item}   />
          })
        }
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;

//legend => To toggle on off  budget<->expense

//chatArea -> to remove the border around the bars

//tooltip=> to show data on hover
