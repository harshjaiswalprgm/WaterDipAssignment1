// import React from 'react';
// import ReactApexChart from 'react-apexcharts';

// function ColumnChart({ data }) {
//   const countryVisitors = {};

//   data.forEach(item => {
//     const totalVisitors = parseInt(item.adults) + parseInt(item.children) + parseInt(item.babies);
//     countryVisitors[item.country] = (countryVisitors[item.country] || 0) + totalVisitors;
//   });

//   const countries = Object.keys(countryVisitors);
//   const visitors = Object.values(countryVisitors);

//   const chartOptions = {
//     chart: {
//       type: 'bar',
//     },
//     xaxis: {
//       categories: countries,
//     },
//   };

//   return (
//     <ReactApexChart options={chartOptions} series={[{ name: 'Visitors', data: visitors }]} type="bar" />
//   );
// }

// export default ColumnChart;


import React from "react";
import ReactApexChart from "react-apexcharts";

const ColumnChart = ({ data }) => {
  const visitorsByCountry = data.reduce((acc, booking) => {
    acc[booking.country] = (acc[booking.country] || 0) + 1;
    return acc;
  }, {});

  const series = [
    {
      name: "Visitors",
      data: Object.values(visitorsByCountry),
    },
  ];

  const options = {
    chart: { id: "visitors-by-country" },
    xaxis: { categories: Object.keys(visitorsByCountry) },
    title: { text: "Visitors by Country" },
  };

  return <ReactApexChart options={options} series={series} type="bar" />;
};

export default ColumnChart;
