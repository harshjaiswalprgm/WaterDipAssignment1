// import React from 'react';
// import ReactApexChart from 'react-apexcharts';

// function SparklineChart({ data, type }) {
//   const series = [];

//   data.forEach(item => {
//     series.push(parseInt(item[type]));
//   });

//   const chartOptions = {
//     chart: {
//       type: 'line',
//       sparkline: { enabled: true },
//     },
//     stroke: {
//       curve: 'smooth',
//     },
//   };

//   return (
//     <ReactApexChart options={chartOptions} series={[{ name: `${type} visitors`, data: series }]} type="line" />
//   );
// }

// export default SparklineChart;

import React from "react";
import ReactApexChart from "react-apexcharts";

const SparklineChart = ({ data, type }) => {
  const getData = () =>
    data.map((item) => {
      if (type === "adults") return item.adults;
      if (type === "children") return item.children;
      return 0;
    });

  const series = [{ data: getData() }];

  const options = {
    chart: {
      type: "line",
      sparkline: { enabled: true },
    },
    title: { text: `${type.charAt(0).toUpperCase() + type.slice(1)} Visitors` },
  };

  return <ReactApexChart options={options} series={series} type="line" />;
};

export default SparklineChart;
