import React, { useState } from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import Header from "./Header";
import Footer from "./Footer";

export function Survey() {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(true);
  const [answers, setAnswers] = useState(Array(12).fill(""));

  const handleNext = () => {
    if (!isLastStep) {
      if (activeStep === 0 || validateStep(activeStep)) {
        setActiveStep((cur) => cur + 1);
        setIsFirstStep(false);
      }
    }
  };

  const handlePrev = () => {
    if (!isFirstStep) {
      setActiveStep((cur) => cur - 1);
      setIsLastStep(false);
    }
  };

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const validateStep = (step) => {
    const startIndex = step * 3;
    const endIndex = startIndex + 3;
    for (let i = startIndex; i < endIndex; i++) {
      if (!answers[i]) {
        return false;
      }
    }
    return true;
  };

  const renderQuestions = () => {
    const startIndex = activeStep * 3;
    const questions = [];

    for (let i = 0; i < 3; i++) {
      const questionIndex = startIndex + i;
      questions.push(
        <div key={questionIndex}>
          <p>Question {questionIndex + 1}:</p>
          <input
            type="text"
            placeholder="Answer"
            value={answers[questionIndex]}
            onChange={(e) => handleAnswerChange(questionIndex, e.target.value)}
            className="border border-gray-300 p-2 mt-2 w-full"
          />
        </div>
      );
    }

    return questions;
  };

  return (
    <div>
        <Header />
        <div className="w-full py-4 px-8 pt-20">
            <Stepper
                activeStep={activeStep}
                isLastStep={(value) => setIsLastStep(value)}
                isFirstStep={(value) => setIsFirstStep(value)}
            >
                <Step onClick={() => setActiveStep(0)}>1</Step>
                <Step onClick={() => setActiveStep(1)}>2</Step>
                <Step onClick={() => setActiveStep(2)}>3</Step>
            </Stepper>
            <div className="mt-16">
                {renderQuestions()}
                <div className="flex justify-between mt-4">
                <Button className="bg-blue-500 text-white p-2" onClick={handlePrev} disabled={isFirstStep}>
                    Prev
                </Button>
                <Button className="bg-blue-500 text-white p-2" onClick={handleNext} disabled={isLastStep}>
                    Next
                </Button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}
