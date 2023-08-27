import React, { useState, useEffect } from 'react';
import { BLOODTYPE } from './Question';
import { useNavigate, Link } from 'react-router-dom';

function Bmi() {
    const navigate = useNavigate();
    const handleSchedule = () => {
        navigate("/layout/schedule")
      };
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [dob, setDob] = useState('');  
    const [calculatedBMI, setCalculatedBMI] = useState(null);
    const [bmiCategory, setBmiCategory] = useState('');
    const calculateBMI = () => {
      if (weight && height) {
        const heightInMeters = height / 100; // Convert height to meters
        const bmi = weight / (heightInMeters * heightInMeters);
        setCalculatedBMI(bmi.toFixed(2));
  
        // Determine BMI category
        if (bmi < 18.5) {
          setBmiCategory('Underweight');
        } else if (bmi >= 18.5 && bmi < 24.9) {
          setBmiCategory('Normal');
        } else if (bmi >= 25 && bmi < 29.9) {
          setBmiCategory('Overweight');
        } else {
          setBmiCategory('Obese');
        }
      } else {
        console.log('Please enter valid weight and height.');
      }
    };
    const getCategoryBorderColor = () => {
      switch (bmiCategory) {
        case 'Underweight':
          return 'red';
        case 'Normal':
          return 'green';
        case 'Overweight':
          return 'orange';
        case 'Obese':
          return 'red';
        default:
          return 'black';
      }
    };
  return (
    <div>
      <div className="flex items-center justify-center mt-4">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form>
            <div className="mb-5">
              <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className={`w-full rounded-md border bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
              />
            </div>
            <div class="mb-5">
                <label
                for="description"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Weight
                </label>
                <input
                type="text"
                name="height"
                id="height"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter weight"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>
            <div class="mb-5">
                <label
                for="description"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Height
                </label>
                <input
                type="text"
                name="height"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter height"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>
            <div class="mb-5">
              <label className="block font-medium mb-2">Blood Type</label>
              <select
                name="bloodType"
                value={bloodType}
                onChange={(e) => setBloodType(e.target.value)}
                className="block w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              >
                <option value="">Select...</option>
                {BLOODTYPE.map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                    <label
                    for="date"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Date Of Birth
                    </label>
                    <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                </div>
            </div>
            <div class="mb-5">
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={calculateBMI}
              >
                Calculate BMI
              </button>
            </div>
            {calculatedBMI && (
              <div class="mb-5">
                <p>Your calculated BMI: {calculatedBMI}</p>
                <p style={{ borderColor: getCategoryBorderColor() }} className="border-2 p-2 rounded">
                  BMI Category: {bmiCategory}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Bmi;

