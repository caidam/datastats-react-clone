// DoughnutChartCall.js
import React from 'react';
import { RawData } from '../RawData';
import DoughnutChart from '../DoughnutChart';

const DoughnutChartLocal = () => {

    // Parse the JSON response
    const data = RawData.top5Jobs;

    // Process the data as needed for the BarChart
    const chartData = {
      labels: data.map((item) => item.job_search),
      datasets: [{
        label: 'Number of offers',
        data: data.map((item) => item.nb_jobs),
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
      }],
    };

    return <DoughnutChart chartData={chartData} />;
};

export default DoughnutChartLocal;