import React, { useEffect,useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import { createconversation,resetConversation } from "../../features/Conversation/convoSlice";
import {  
  useSelector,
  useDispatch
} from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import { CHRONIC_DISEASE_CHOICES,
  ACTIVITY_LEVEL_CHOICES,
  SMOKING_HABIT_CHOICES,
  ALCOHOL_CONSUMPTION_CHOICES,
  SLEEP_PATTERNS_CHOICES,
  CURRENT_DIET_CHOICES,
  FOOD_ALLERGY_CHOICES, } from '../Question';

function Survey({ onSave }) {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    // Reset appointment data when component unmounts or changes
    return () => {
      dispatch(resetConversation());
    };
  }, [dispatch]);

  const [formData, setFormData] = useState({
    chronicDisease: '',
    activityLevel: '',
    smokingHabit: '',
    alcoholConsumption: '',
    sleepPatterns: '',
    currentDiet: '',
    foodAllergy: '',
    physical_disability: false
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleCheckboxChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    console.log('Checkbox value:', newValue);
  };
  const handleSurvey = async(e) => {
    e.preventDefault() 
  try {
    const requestBody = {
      questionnaire: {
        chronic_diseases: formData.chronicDisease,
        activity_level: formData.activityLevel,
        smoking_habits: formData.smokingHabit,
        alcohol_consumption: formData.alcoholConsumption,
        sleep_patterns: formData.sleepPatterns,
        current_diet: formData.currentDiet,
        food_allergies: formData.foodAllergy,
        physical_disability: isChecked
      }
    };
    console.log("#@@@@@#@@@@@@@@##############",requestBody)
    onSave(requestBody.questionnaire);
        
      console.log("$%$%$requestion body%$%$",requestBody)
      dispatch(createconversation(requestBody));
      console.log('survey creation initiated.');
      toast.success('Survey successfully', {
        position: "top-center",
        autoClose: 3000, // 3 seconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      
    } catch (error) {
      console.error('Appointment creation failed:', error.message);
      toast.error('Survey failed', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      
    }
  }
  return (
    <div>
    <div className="container mx-auto p-4 mt-16">
      <h1 className="text-2xl font-semibold mb-4 ">Health Questionnaire</h1>
      <form className="">
          <div className="w-full flex flex-wrap px-4 mb-4">
            <div className="m-4 w-1/3">
              <label className="block font-medium mb-2">Chronic Disease</label>
              <select
                name="chronicDisease"
                value={formData.chronicDisease}
                onChange={handleChange}
                className="block w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              >
                <option value="">Select...</option>
                {CHRONIC_DISEASE_CHOICES.map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div className="m-4 w-1/3">
              <label className="block font-medium mb-2">Activity Level</label>
              <select
                name="activityLevel"
                value={formData.activityLevel}
                onChange={handleChange}
                className="block w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              >
                <option value="">Select...</option>
                {ACTIVITY_LEVEL_CHOICES.map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-wrap px-4 mb-4">
            <div className="m-4 w-1/3">
              <label className="block font-medium mb-2">Smoking Habits</label>
              <select
                name="smokingHabit"
                value={formData.smokingHabit}
                onChange={handleChange}
                className="block w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              >
                <option value="">Select...</option>
                {SMOKING_HABIT_CHOICES.map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div className="m-4 w-1/3">
              <label className="block font-medium mb-2">Alcohol Consumption</label>
              <select
                name="alcoholConsumption"
                value={formData.alcoholConsumption}
                onChange={handleChange}
                className="block w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              >
                <option value="">Select...</option>
                {ALCOHOL_CONSUMPTION_CHOICES.map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-wrap px-4 mb-4">
            <div className="m-4 w-1/3">
              <label className="block font-medium mb-2">Sleep Patterns</label>
              <select
                name="sleepPatterns"
                value={formData.sleepPatterns}
                onChange={handleChange}
                className="block w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              >
                <option value="">Select...</option>
                {SLEEP_PATTERNS_CHOICES.map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div className="m-4 w-1/3">
              <label className="block font-medium mb-2">Current Diet</label>
              <select
                name="currentDiet"
                value={formData.currentDiet}
                onChange={handleChange}
                className="block w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              >
                <option value="">Select...</option>
                {CURRENT_DIET_CHOICES.map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-wrap px-4 mb-4">
            <div className="m-4 w-1/3">
              <label className="block font-medium mb-2">Food Allergy</label>
              <select
                name="foodAllergy"
                value={formData.foodAllergy}
                onChange={handleChange}
                className="block w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              >
                <option value="">Select...</option>
                {FOOD_ALLERGY_CHOICES.map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/3 px-4 mb-4">
            <div className="p-4">
      <label className="flex items-center">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-indigo-600"
          value={formData.physical_disability}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className="ml-2 text-gray-700">Physical disabilty?</span>
      </label>
    </div>
            </div>
          </div>
        </form>
    </div>
    </div>
  );
};

export default Survey;
