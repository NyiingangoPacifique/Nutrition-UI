import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { CHRONIC_DISEASE_CHOICES,
  ACTIVITY_LEVEL_CHOICES,
  SMOKING_HABIT_CHOICES,
  ALCOHOL_CONSUMPTION_CHOICES,
  SLEEP_PATTERNS_CHOICES,
  CURRENT_DIET_CHOICES,
  FOOD_ALLERGY_CHOICES, } from './Question';

function Survey() {
  const [formData, setFormData] = useState({
    chronicDisease: '',
    activityLevel: '',
    smokingHabit: '',
    alcoholConsumption: '',
    sleepPatterns: '',
    currentDiet: '',
    foodAllergy: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
    <Header />
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Health Questionnaire</h1>
      <form>
        <div className="mb-4">
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
        <div className="mb-4">
          <label className="block font-medium mb-2">Activity Level</label>
          <select
            name="activitylevel"
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
        <div className="mb-4">
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
        <div className="mb-4">
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
        <div className="mb-4">
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
        <div className="mb-4">
          <label className="block font-medium mb-2">Current Diet</label>
          <select
            name="curretdiet"
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
        <div className="mb-4">
          <label className="block font-medium mb-2">Food Allergy</label>
          <select
            name="foodallergy"
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
        <div className="mb-4">
          <label className="block font-medium mb-2">Current Diet</label>
          <select
            name="curretdiet"
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
        <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
            <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="bordered-checkbox-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
    <Footer />
    </div>
  );
};

export default Survey;
