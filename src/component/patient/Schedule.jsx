import React, { useState, useEffect } from 'react';

function Schedule() {

  const [formData, setFormData] = useState({
    name: '',
    title: '',
    description: '',
    date: '',
    time: ''
  });

  const [errors, setErrors] = useState({});


  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate the form data
    const validationErrors = {};
    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.title) validationErrors.title = 'Title is required';
    if (!formData.description) validationErrors.description = 'Description is required';
    if (!formData.date) validationErrors.date = 'Date is required';
    if (!formData.time) validationErrors.time = 'Time is required';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Prepare the request body
    const requestBody = {
      user: 1,
      title: formData.title,
      description: formData.description,
      date: formData.date + 'T' + formData.time + ':00Z'
    };

    console.log("$%$%$%$%$",requestBody)

    try {
      // Dispatch the createAppointment action
      console.log('Appointment creation initiated.');
      
      // Reset form data after successful submission
      setFormData({
        name: '',
        title: '',
        description: '',
        date: '',
        time: ''
      });

      setErrors({});
    } catch (error) {
      console.error('Appointment creation failed:', error.message);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
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
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className={`w-full rounded-md border ${errors.name ? 'border-red-500' : 'border-[#e0e0e0]'} bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
              />
              {errors.name && <span className="text-red-500">{errors.name}</span>}
            </div>
            <div class="mb-5">
                <label
                for="title"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Title
                </label>
                <input
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter title"
                className={`w-full rounded-md border ${errors.name ? 'border-red-500' : 'border-[#e0e0e0]'} bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                />
                {errors.title && <span className="text-red-500">{errors.title}</span>}
            </div>
            <div class="mb-5">
                <label
                for="description"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Description
                </label>
                <input
                type="text"
                name="description"
                id="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter your description"
                className={`w-full rounded-md border ${errors.description ? 'border-red-500' : 'border-[#e0e0e0]'} bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                />
                {errors.description && <span className="text-red-500">{errors.description}</span>}
            </div>
            <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                    <label
                    for="date"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Date
                    </label>
                    <input
                    type="date"
                    name="date"
                    id="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className={`w-full rounded-md border ${errors.date ? 'border-red-500' : 'border-[#e0e0e0]'} bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                    />
                    {errors.date && <span className="text-red-500">{errors.date}</span>}
                </div>
                </div>
                <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                    <label
                    for="time"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Time
                    </label>
                    <input
                    type="time"
                    name="time"
                    id="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className={`w-full rounded-md border ${errors.time ? 'border-red-500' : 'border-[#e0e0e0]'} bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                    />
                    {errors.time && <span className="text-red-500">{errors.time}</span>}
                </div>
                </div>
            </div>
            <div>
              <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Schedule;

