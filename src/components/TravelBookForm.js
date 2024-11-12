import React, { useState } from 'react';
import DateSection from './DateSection';
import NumPersonsSection from './NumPersonSection';
import PersonalInfoSection from './PersonalInfo';
import SummarySection from './SummarySection';
import './TravelBookForm.css';
import Navbar from './Navbar';
import Footer from './Footer';

const TravelBookForm = () => {

    const [step, setStep] = useState(1);

    const handleNextStep = () => {
      setStep(step + 1);
    };

    const handlePrevStep = () => {
      setStep(step - 1);
    };

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      destination: '',
      departureDate: '',
      returnDate: ''
    });
  
    
    const [numPersons, setNumPersons] = useState(1);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleIncrement = () => {
      setNumPersons(numPersons + 1);
    };
  
    const handleDecrement = () => {
      if (numPersons > 1) {
        setNumPersons(numPersons - 1);
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Form data submitted:', formData);
      console.log('Number of persons:', numPersons);
    };
  // Existing code

  return (
    <>
      <Navbar />
      <div className="travel-form">
        <h2>Booking Details</h2>
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <DateSection formData={formData} handleInputChange={handleInputChange} />
          )}

          {step === 2 && (
            <NumPersonsSection
              numPersons={numPersons}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
            />
          )}

          {step === 3 && (
            <PersonalInfoSection formData={formData} handleInputChange={handleInputChange} />
          )}

          {step === 4 && (
            <SummarySection formData={formData} numPersons={numPersons} />
          )}

          <div className="button-group">
            {step > 1 && (
              <button type="button" onClick={handlePrevStep} className="Back">
                Back
              </button>
            )}

            {step < 4 ? (
              <button type="button" onClick={handleNextStep} className="Next">
                Next
              </button>
            ) : (
              <button type="submit" className="Book">
                Book Now
              </button>
            )}
          </div>
        </form>
      </div>
      <Footer />
    </>
  );

};

export default TravelBookForm;
