import React from 'react'

import {
  ChartComponent,
  SeriesDirective,
  SeriesCollectionDirective,
  ColumnSeries,
  Inject,
  Tooltip,
  Legend,
  Category,
  DataLabel,
} from "@syncfusion/ej2-react-charts";

import { Header } from '../../components';

import {barCustomSeries,barPrimaryXAxis,barPrimaryYAxis} from '../../data/dummy'

import { useStateContext } from '../../context/ContextProvider';

const Bar = () => {
  const {currentMode} = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24  p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Area" title="Inflation Rate in Percentage" />
    <div className=" w-full">
    <ChartComponent
      id="area-chart"
      height="420px"
      
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      chartArea={{border:{width:0}}}
      tooltip={{enable:true}}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[Legend,Tooltip,Category,DataLabel,ColumnSeries]} />
      <SeriesCollectionDirective>
        {barCustomSeries.map((item, index) => {
          return <SeriesDirective key={index} {...item} />;
        })}
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
    </div>
  )
}

export default Bar