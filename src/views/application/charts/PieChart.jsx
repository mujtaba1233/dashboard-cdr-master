import React from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = (props) => {
  const series = props && props.data;
  const options = {
    chart: {
      type: "donut",
    },
    labels: props && props.labels,
    fill: {
      type: 'gradient',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  return (
    <div className="text-light">
      <ReactApexChart series={series} options={options} type="pie" />
    </div>
  );
};

export default PieChart;
