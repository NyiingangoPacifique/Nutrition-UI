import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
  import Bmi from "./Bmi";
  import Schedule from "./Schedule";
  import Survey from "./Survey";

const Appointment = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [isChecked, setIsChecked] = useState(false);

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePrevious = () => {
        setCurrentStep(currentStep - 1);
    };

  

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div>
                        <Survey />
                    </div>
                );
            case 2:
                return (
                    <div>
                        <Bmi />
                    </div>
                );
            case 3:
                  return (
                      <div>
                          <Schedule />
                      </div>
                  );
            default:
                return null;
        }
    };

    const steps = ["Survey", "BMI", "Appintment"];
    const stepIcons = [
      // First step icon
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
      </svg>,
      // Second step icon
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <line x1="20" y1="8" x2="20" y2="14"></line>
          <line x1="23" y1="11" x2="17" y2="11"></line>
      </svg>,
      // Add more step icons for other steps
  ];

  return (
    <div>
        {/* Stepper */}
        <div className="mx-4 p-4 flex items-center space-x-8">
            {steps.map((stepLabel, index) => (
                <React.Fragment key={index}>
                    <div className={`flex items-center flex-col ${index === currentStep - 1 ? 'text-teal-600' : 'text-gray-500'}`}>
                        <div className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 ${index === currentStep - 1 ? 'border-teal-600' : 'border-gray-300'}`}>
                            {stepIcons[index]}
                        </div>
                        <div className={`text-xs font-medium uppercase mt-2 ${index === currentStep - 1 ? 'text-teal-600' : 'text-gray-500'}`}>
                            {stepLabel}
                        </div>
                    </div>
                    {index !== steps.length - 1 && <hr className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300" />}
                </React.Fragment>
            ))}
        </div>

        {/* Rendering the current step's content */}
        {renderStepContent()}

        <div className="flex p-2 mt-4">
            {currentStep > 1 && (
                <button
                    className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer
    hover:bg-gray-200
    bg-gray-100
    text-gray-700
    border duration-200 ease-in-out
    border-gray-600 transition"
                    onClick={handlePrevious}
                >
                    Previous
                </button>
            )}
            {currentStep < steps.length && (
                <div className="flex-auto flex flex-row-reverse">
                    <button
                        className="text-base ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer
    hover:bg-teal-600
    bg-teal-600
    text-teal-100
    border duration-200 ease-in-out
    border-teal-600 transition"
                        onClick={handleNext}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    </div>
);
}

export default Appointment;
