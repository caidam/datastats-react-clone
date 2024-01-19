import React from 'react';

const DataFetchingComponent = ({ fetchData, render }) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetchData()
      .then((result) => setData(result))
      .catch((error) => console.error('Error fetching data:', error));
  }, [fetchData]);

  return <>{data && render(data)}</>;
};

export default DataFetchingComponent;