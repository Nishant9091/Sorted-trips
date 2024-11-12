import React from 'react';

const NumPersonsSection = ({ numPersons, handleIncrement, handleDecrement }) => {
  return (
    <div className="form-section">
      <label>Persons:</label>
      <div className="persons-input">
        <button type="button" className="person-btn" onClick={handleDecrement}>-</button>
        <span>{numPersons}</span>
        <button type="button" className="person-btn" onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default NumPersonsSection;
