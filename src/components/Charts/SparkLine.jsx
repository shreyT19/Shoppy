import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
const SparkLine = ({ currentColor, id, type, height, width, data, color }) => {
  // console.log(data);
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      dataSource={data}
      xName="xval"
      yName="yval"
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      type={type}
      tooltipSettings={{
        visible: true, format: '${xval} : data ${yval}',
        trackLineSettings:{
          visible:true
        }
    }}
    >
      <Inject services={[SparklineTooltip]}></Inject>
    </SparklineComponent>
  );
};

export default SparkLine;

// { x: 1, yval: 2 },
// { x: 2, yval: 6 },
// { x: 3, yval: 8 },
// { x: 4, yval: 5 },
// { x: 5, yval: 10 },
