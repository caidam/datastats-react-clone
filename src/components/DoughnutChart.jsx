import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
// import {Chart as ChartJS} from 'chart.js/auto';

ChartJS.register(ArcElement, Tooltip, Legend);

function DougnutChart({chartData}) {
    const options = {
        responsive: true,
        maintainAspectRatio: false, // Set to false for responsive behavior
      };

    return < Doughnut data={chartData} options={options} />;
}

export default DougnutChart;