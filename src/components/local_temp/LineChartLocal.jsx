// temporary placeholder

// LineChartLocal.jsx
import React from 'react';
import { RawData } from '../RawData';
import LineChart from '../LineChart';

const LineChartLocal = () => {
  // Access the data directly from the DataComponent
  const data = RawData.offerEvolution;

  // Process the data as needed for the BarChart
  const chartData = {
    labels: data.map((item) => item.ref_day),
    datasets: [{
      label: 'Number of Offers',
      data: data.map((item) => item.nb_offer),
      backgroundColor: '#36A2EB',
      tension: 0.4,
    }],
  };

//   console.log('Processed Chart Data:', RawData.offerEvolution);

  return < LineChart chartData={chartData} />;
};

export default LineChartLocal;