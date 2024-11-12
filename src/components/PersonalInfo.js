import React from "react";

const PersonalInfoSection = ({ formData, handleInputChange }) => {
  return (
    <div className="form-section" id="Personal-Info">
      <div>
        <fieldset>Name:</fieldset>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <fieldset>Email:</fieldset>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <fieldset>Contact No:</fieldset>
        <input
          type="Contact No."
          name="Contact No."
          value={formData.Number}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <fieldset>Address:</fieldset>
        <input
          type="Address"
          name="Address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
      </div>
    </div>
  );
};

export default PersonalInfoSection;
