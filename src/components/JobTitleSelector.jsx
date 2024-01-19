// JobTitleSelector.js
import React from 'react';

const JobTitleSelector = ({ onJobTitleChange }) => {
  const handleSelectChange = (e) => {
    const newJobTitle = e.target.value;
    onJobTitleChange(newJobTitle);
  };

  return (
    <div>
      <label htmlFor="jobTitle">Select Job Title: </label>
      <select id="jobTitle" onChange={handleSelectChange}>
        <option value="/Data Engineer">Data Engineer</option>
        <option value="/Data Analyst">Data Analyst</option>
        {/* Add more job titles as needed */}
      </select>
    </div>
  );
};

export default JobTitleSelector;