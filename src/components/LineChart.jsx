// import React from 'react';
// import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

// function LineChart({chartData}) {
//     return < Line data={chartData} />;
// }

// export default LineChart;

import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart({ chartData }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Set to false for responsive behavior
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;