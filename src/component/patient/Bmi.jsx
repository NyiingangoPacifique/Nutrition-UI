import React, { useState, useEffect } from 'react';
import { BLOODTYPE } from './Question';
import { useNavigate, Link } from 'react-router-dom';
import {  
  useSelector,
  useDispatch
} from 'react-redux'
import UpdateHealth from './health/UpdateHealth';
import { MdHealthAndSafety } from 'react-icons/md';
import { BsUsbMiniFill } from 'react-icons/bs';

function Bmi() {
    const navigate = useNavigate();
    const handleSchedule = () => {
        navigate("/layout/schedule")
      };
    
      const [calculatedBMI, setCalculatedBMI] = useState(null);
      const [bmiCategory, setBmiCategory] = useState('');
      const [calculatedNowBMI, setCalculatedNowBMI] = useState(null);
      const [bmiNowCategory, setBmiNowCategory] = useState('');
      const [weight, setWeight] = useState('');
      const [height, setHeight] = useState('');
      const userOrganization = useSelector((state) => state.auths.userOrganization);
      const initialWeight = userOrganization.health ? userOrganization.health.weight || '' : '';
      const initialHeight = userOrganization.health ? userOrganization.health.height || '' : '';
      const initialBloodType = userOrganization.health ? userOrganization.health.blood_type || '' : '';
    
      const calculateBMI = () => {
        if (initialWeight && initialHeight) {
          const heightInMeters = initialHeight / 100; // Convert height to meters
          const bmi = initialWeight / (heightInMeters * heightInMeters);
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
      const calculateNowBMI = () => {
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
    
      useEffect(() => {
        calculateBMI();
      }, []);
    
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
      <UpdateHealth />
      <div class="grid gap-8 md:grid-cols-2 lg:gap-12 p-6 md:p-10 mt-12">
          <a href="#"
              class="flex flex-col p-6 space-y-6 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6">
              <div
                  class="flex items-center justify-center w-32 h-32 bg-green-100 border border-green-200 rounded-full shadow-inner lg:h-20 lg:w-20">
                  <MdHealthAndSafety />
              </div>
              <div class="flex-1">
                  <h5 class="mb-3 text-xl font-bold lg:text-2xl">Your Health Details</h5>
                  <div class="flex m-4">
                    <div>
                      <strong>Weight: </strong>
                      <span> {initialWeight}KG</span>
                    </div>
                    <div>
                      <strong>Height: </strong>
                      <span> {initialHeight}CM</span>
                    </div>
                    <div>
                      <strong>Blood Type: </strong>
                      <span> {initialBloodType}</span>
                    </div>
                  </div>
              </div>
          </a>
          <a href="#"
              class="flex flex-col p-6 space-y-6 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6">
              <div
                  class="flex items-center justify-center w-16 h-16 bg-green-100 border border-green-200 rounded-full shadow-inner lg:h-20 lg:w-20">
                  <BsUsbMiniFill />
              </div>
              <div class="flex-1">
                  <h5 class="mb-3 text-xl font-bold lg:text-2xl">your Body Mass Index </h5>
                  {calculatedBMI && (
                    <div class="mb-5">
                      <p>Your calculated BMI: {calculatedBMI}</p>
                      <p style={{ borderColor: getCategoryBorderColor() }} className="border-2 p-2 rounded">
                        BMI Category: {bmiCategory}
                      </p>
                    </div>
                  )}
              </div>
          </a>
      </div>
      <div className="flex items-center justify-center mt-4">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form>
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
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={calculateNowBMI}
              >
                Calculate BMI
              </button>
            </div>
            {calculatedNowBMI && (
              <div class="mb-5">
                <p>Your calculated BMI: {calculatedNowBMI}</p>
                <p style={{ borderColor: getCategoryBorderColor() }} className="border-2 p-2 rounded">
                  BMI Category: {bmiNowCategory}
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

