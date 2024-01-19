// LineChartCall.js
import React from 'react';
import DataFetchingComponent from './DataFetchingComponent';
import LineChart from './LineChart';

const fetchDataForLineChart = async () => {
  try {
    // Make the API call
    const response = await fetch('https://caidam.freeddns.org/offer_evolution');
    
    if (!response.ok) {
      throw new Error('Failed to fetch data for LineChart');
    }

    // Parse the JSON response
    const data = await response.json();

    // Process the data as needed for the BarChart
    const chartData = {
      labels: data.map((item) => item.ref_day),
      datasets: [{
        label: 'Users Gained',
        data: data.map((item) => item.nb_offer),
        backgroundColor: '#36A2EB', // Set your desired background color
        tension: 0.4,
      }],
    };

    return chartData;
  } catch (error) {
    throw new Error(`Error fetching data for LineChart: ${error.message}`);
  }
};

const LineChartCall = () => {
  return (
    <DataFetchingComponent fetchData={fetchDataForLineChart} render={(data) => <LineChart chartData={data} />} />
  );
};

export default LineChartCall;