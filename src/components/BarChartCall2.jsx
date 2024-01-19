// BarChartCall2.js
import React from 'react';
import DataFetchingComponent from './DataFetchingComponent';
import BarChart from './BarChart';

const BarChartCall2 = ({ jobTitle }) => {
  const fetchDataForBarChart = async () => {
    try {
      // Make the API call with the selected job title
      const response = await fetch(`http://51.44.20.166:5000/top_skills${(jobTitle)}`);
      
      if (!response.ok) {
        console.log(response)
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

  return (
    <DataFetchingComponent fetchData={fetchDataForBarChart} render={(data) => <BarChart chartData={data} />} />
  );
};

export default BarChartCall2;