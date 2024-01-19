// BarChartCall.js
import React from 'react';
import DataFetchingComponent from './DataFetchingComponent';
import BarChart from './BarChart';

const fetchDataForBarChart = async () => {
  try {
    // Make the API call
    const response = await fetch('https://caidam.freeddns.org/top_skills');
    
    if (!response.ok) {
      throw new Error('Failed to fetch data for BarChart');
    }

    // Parse the JSON response
    const data = await response.json();

    // Process the data as needed for the BarChart
    const chartData = {
      labels: data.map((item) => item.technologie),
      datasets: [{
        label: 'Users Gained',
        data: data.map((item) => item.nb_offer),
        backgroundColor: '#36A2EB', // Set your desired background color
        tension: 0.4,
      }],
    };

    return chartData;
  } catch (error) {
    throw new Error(`Error fetching data for BarChart: ${error.message}`);
  }
};

const BarChartCall = () => {
  return (
    <DataFetchingComponent fetchData={fetchDataForBarChart} render={(data) => <BarChart chartData={data} />} />
  );
};

export default BarChartCall;