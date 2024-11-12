import React from 'react';
import "./form-secton.css";


const DateSection = ({ formData, handleInputChange }) => {
  return (
    <div className="form-section" id="Dates" >
    <div>
      <label>Start Date:</label>
      <input
        type="date"
        name="departureDate"
        value={formData.departureDate}
        onChange={handleInputChange}
        required
      />
      </div>
      <div>
      <label>End Date:</label>
      <input
        type="date"
        name="returnDate"
        value={formData.returnDate}
        onChange={handleInputChange}
        required
      />
      </div>
    </div>
  );
};

export default DateSection;
