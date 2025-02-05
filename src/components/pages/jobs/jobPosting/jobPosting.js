import React, { useState } from "react";
import Footer from "../../../layout/footer/footer";
import NavBar from "../../../layout/Navbar/studentNavBar";
import FirstForm from "./firstForm";
import SecondForm from "./secondForm";


const JobPosting = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    startdate: "",
    duration: "",
    salary: 0,
    numberOfHiring: 1,
   
    numberOfOpenings: 0,
  });

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleFormChange = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  return (
    <>
      <NavBar />
      {currentStep === 1 && (
        <FirstForm
          formData={formData}
          onChange={handleFormChange}
          onNextStep={handleNextStep}
        />
      )}
      {currentStep === 2 && (
        <SecondForm
          formData={formData}
          onChange={handleFormChange}
          onPreviousStep={handlePreviousStep}
        />
      )}
      <Footer />
    </>
  );
};

export default JobPosting;
