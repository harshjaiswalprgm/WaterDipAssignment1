// import React from 'react';
// import ReactApexChart from 'react-apexcharts';

// function TimeSeriesChart({ data }) {
//   const series = [];
//   const categories = [];

//   data.forEach(item => {
//     const totalVisitors = parseInt(item.adults) + parseInt(item.children) + parseInt(item.babies);
//     const date = `${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}`;
//     categories.push(date);
//     series.push(totalVisitors);
//   });

//   const chartOptions = {
//     chart: {
//       type: 'line',
//     },
//     xaxis: {
//       categories: categories,
//     },
//   };

//   return (
//     <ReactApexChart options={chartOptions} series={[{ name: 'Visitors', data: series }]} type="line" />
//   );
// }

// export default TimeSeriesChart;


import React from "react";
import ReactApexChart from "react-apexcharts";

const TimeSeriesChart = ({ data }) => {
  const series = [
    {
      name: "Visitors",
      data: data.map((item) => ({
        x: `${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}`,
        y: item.adults + item.children + item.babies,
      })),
    },
  ];

  const options = {
    chart: { id: "visitors-time-series" },
    xaxis: { type: "datetime" },
    title: { text: "Visitors Per Day" },
  };

  return <ReactApexChart options={options} series={series} type="line" />;
};

export default TimeSeriesChart;
