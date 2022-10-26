import React from "react";
import ChartBart from "./ChartBar";
const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBart
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
