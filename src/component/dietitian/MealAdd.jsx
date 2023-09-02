import React, { useState, useEffect } from 'react';
import { BLOODTYPE } from './Question';
import { TYPE } from './Question';
import { useNavigate, Link } from 'react-router-dom';

function MealAdd() {
    const navigate = useNavigate();
    const [type, setType] = useState('');
    
  return (
    <div>
      <div className="flex items-center justify-center mt-4">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form>
            <div class="mb-5">
              <label className="block font-medium mb-2">Type</label>
              <select
                name="bloodType"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="block w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              >
                <option value="">Select...</option>
                {TYPE.map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div class="mb-5">
                <label
                for="description"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Name
                </label>
                <input
                type="text"
                name="height"
                id="height"
                placeholder="Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>
            <div class="mb-5">
                <label
                for="description"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Description
                </label>
                <textarea 
                  name="description"
                  id="description"
                  rows="10"
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
            </div>
            <div class="mb-5">
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Add Meal
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MealAdd;

