import React from 'react';

const SummarySection = ({ formData, numPersons }) => {
  return (
    <div className="form-section" id="SummarySection">
      <h3>Summary</h3>
      <p>Start Date: {formData.departureDate}</p>
      <p>End Date: {formData.returnDate}</p>
      <p>Number of Persons: {numPersons}</p>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      {/* Add other summary details */}
    </div>
  );
};

export default SummarySection;
