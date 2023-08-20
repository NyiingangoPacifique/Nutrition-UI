import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import Header from "../Header";
import Footer from "../Footer";
import { useDispatch } from 'react-redux';
import { createAppointment, resetAppointment } from '../../features/appointment/appointSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddAppointment() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    title: '',
    description: '',
    date: '',
    time: ''
  });

  const [errors, setErrors] = useState({});

  const storedToken = localStorage.getItem('userData');
  const decoded = jwtDecode(storedToken);
  const userId = decoded.user_id;

  useEffect(() => {
    // Reset appointment data when component unmounts or changes
    return () => {
      dispatch(resetAppointment());
    };
  }, [dispatch]);

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
      user: userId,
      title: formData.title,
      description: formData.description,
      date: formData.date + 'T' + formData.time + ':00Z'
    };

    console.log("$%$%$%$%$",requestBody)

    try {
      // Dispatch the createAppointment action
      dispatch(createAppointment(requestBody));
      console.log('Appointment creation initiated.');
      toast.success('Appointment created successfully', {
        position: "top-center",
        autoClose: 3000, // 3 seconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      
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
      toast.error('Appointment creation failed', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
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
      <Header />
      <ToastContainer />
      <div className="flex items-center justify-center mt-12 p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form onSubmit={handleSubmit}>
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
      <Footer />
    </div>
  );
}

export default AddAppointment;

