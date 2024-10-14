import React, { useState, useEffect } from 'react';
import { getData } from './data';
import TimeSeriesChart from './components/TimeSeriesChart';
import ColumnChart from './components/ColumnChart';
import SparklineChart from './components/SparklineChart';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }
    fetchData();
  }, []);

  const handleDateChange = (startDate, endDate) => {
    setDateRange({ start: startDate, end: endDate });
    // Filter data based on date range
    const filtered = data.filter(item => {
      const date = new Date(item.arrival_date_year, item.arrival_date_month - 1, item.arrival_date_day_of_month);
      return date >= new Date(startDate) && date <= new Date(endDate);
    });
    setFilteredData(filtered);
    
  };

  return (
    <div>
  
   

      <input type="date" onChange={(e) => handleDateChange(e.target.value, dateRange.end)} />
      <input type="date" onChange={(e) => handleDateChange(dateRange.start, e.target.value)} />
      <TimeSeriesChart data={filteredData} />
      <ColumnChart data={filteredData} />
      <SparklineChart data={filteredData} type="adults" />
      <SparklineChart data={filteredData} type="children" />
    </div>
  );
}

export default App;