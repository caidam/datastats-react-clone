// DoughnutChartCall.js
import React from 'react';
import DataFetchingComponent from './DataFetchingComponent';
import DoughnutChart from './DoughnutChart';

const fetchDataForChart = async () => {
  try {
    // Make the API call
    const response = await fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/top_5_jobs`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch data for Chart');
    }

    // Parse the JSON response
    const data = await response.json();

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

    return chartData;
  } catch (error) {
    throw new Error(`Error fetching data for Chart: ${error.message}`);
  }
};

const DoughnutChartCall = () => {
  return (
    <DataFetchingComponent fetchData={fetchDataForChart} render={(data) => <DoughnutChart chartData={data} />} />
  );
};

export default DoughnutChartCall;