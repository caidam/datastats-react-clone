import React from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

function BarChart({chartData}) {
    const options = {
        responsive: true,
        maintainAspectRatio: false, // Set to false for responsive behavior
      };

    return < Bar data={chartData} options={options} />;
}

export default BarChart;