import React from "react";
import ReactApexChart from "react-apexcharts";

const DoughnutChart = (props) => {
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
      {props.data?.length > 0 ? <ReactApexChart series={series} options={options} type="donut" width={"100%"} /> : <h4 className="text-muted font-weight-normal">No Data</h4>}
    </div>
  );
};

export default DoughnutChart;
