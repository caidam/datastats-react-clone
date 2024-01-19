// JobTitleChange.jsx

import React, { useState } from 'react';
import BarChartCall2 from './BarChartCall2';
import JobTitleSelector from './JobTitleSelector';

const JobTitleChange = () => {
  const [jobTitle, setJobTitle] = useState("Data Engineer");

  const handleJobTitleChange = (newJobTitle) => {
    setJobTitle(newJobTitle);
  };

  return (
    <div>
      <BarChartCall2 jobTitle={jobTitle} />
      <JobTitleSelector onJobTitleChange={handleJobTitleChange} />
    </div>
  );
};

export default JobTitleChange;