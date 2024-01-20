// temporary placeholder

// BarChartLocal.jsx
import React from 'react';
import { RawData } from '../RawData';
import BarChart from '../BarChart';

const BarChartLocal = () => {
  // Access the data directly from the DataComponent
  const data = RawData.topSkills;

  // Process the data as needed for the BarChart
  const chartData = {
    labels: data.map((item) => item.technologie),
    datasets: [{
      label: 'Number of Offers',
      data: data.map((item) => item.nb_offer),
      backgroundColor: '#36A2EB',
      tension: 0.4,
    }],
  };

  return <BarChart chartData={chartData} />;
};

export default BarChartLocal;