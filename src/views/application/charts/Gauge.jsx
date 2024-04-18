import React from "react";
import GaugeChart from "react-gauge-chart";

const Gauge = ({ value }) => {
  return (
    <div>
      <GaugeChart id="gauge-chart2" nrOfLevels={25} percent={value} />
      {/* <GaugeChart
        id="gauge-chart3"
        nrOfLevels={30}
        colors={["#FF5F6D", "#FFC371"]}
        arcWidth={0.3}
        percent={0.37}
      /> */}
      {/* <GaugeChart
        id="gauge-chart4"
        nrOfLevels={10}
        arcPadding={0.1}
        cornerRadius={3}
        percent={0.6}
      /> */}
    </div>
  );
};

export default Gauge;
