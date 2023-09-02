import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createPrescription, getOnePrescription,getPrescription, resetPrescription } from '../../features/prescription/prescriptionSlice';
import { getAllUser } from '../../features/auth/authSlice';
import {  
  useSelector,
  useDispatch
} from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PrescriptionAdd() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [type, setType] = useState('');
    const [showModal, setShowModal] = useState(false);
    const allUsers = useSelector((state) => state.auths.allUsers)

    useEffect(() => {
        dispatch(getAllUser());
        dispatch(getPrescription());
    }, [dispatch]);

    const nUsers = allUsers.filter(user => user.account_type === 'n');
    const pUsers = allUsers.filter(user => user.account_type === 'p');

    // State to store the selected patient and doctor
    const [selectedPatient, setSelectedPatient] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // Handle the button click event to save the prescription
    const handleAddPrescription = () => {
        // Ensure that both a patient and a doctor are selected
        if (!selectedPatient || !selectedDoctor) {
            alert('Please select a patient and a doctor.');
            return;
        }

        // Create an object with the prescription data
        const prescriptionData = {
            doctor: selectedDoctor,
            patient: selectedPatient,
            title: title,
            description: description,
        };

        // Dispatch the createPrescription action with the prescription data
        dispatch(createPrescription(prescriptionData));
        toast.success("Prescription Created successfully!");
        // Optionally, you can reset the form fields after submission
        setSelectedPatient('');
        setSelectedDoctor('');
        setTitle('');
        setDescription('');
    };

    return (
        <div>
            <ToastContainer />
            <div className="flex items-center justify-center h-10">
                <button
                    className="px-6 py-3 text-white bg-gray-800 rounded-md"
                    type="button"
                    onClick={() => setShowModal(true)}
                >
                    Add Description
                </button>
            </div>
            {showModal ? (
                <>
                  <div className="flex items-center justify-center mt-4">
                      <div className="mx-auto w-full max-w-[550px] bg-white">
                          <form>
                              <div class="mb-5">
                                  <label
                                      for="doctor"
                                      class="mb-3 block text-base font-medium text-[#07074D]"
                                  >
                                      Doctor
                                  </label>
                                  <select
                                      id="doctor"
                                      name="doctor"
                                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                      onChange={(e) => setSelectedDoctor(e.target.value)}
                                      value={selectedDoctor}
                                  >
                                      <option value="">Select a doctor</option>
                                      {nUsers.map((user) => (
                                          <option key={user.id} value={user.id}>
                                              {user.first_name} {user.last_name}
                                          </option>
                                      ))}
                                  </select>
                              </div>
                              <div class="mb-5">
                                  <label
                                      for="patient"
                                      class="mb-3 block text-base font-medium text-[#07074D]"
                                  >
                                      Patient
                                  </label>
                                  <select
                                      id="patient"
                                      name="patient"
                                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                      onChange={(e) => setSelectedPatient(e.target.value)}
                                      value={selectedPatient}
                                  >
                                      <option value="">Select a patient</option>
                                      {pUsers.map((user) => (
                                          <option key={user.id} value={user.id}>
                                              {user.first_name} {user.last_name}
                                          </option>
                                      ))}
                                  </select>
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
                                      placeholder="Title"
                                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                      value={title}
                                      onChange={(e) => setTitle(e.target.value)}
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
                                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                      value={description}
                                      onChange={(e) => setDescription(e.target.value)}
                                  ></textarea>
                              </div>
                              <div class="items-center gap-2 mt-3 sm:flex">
                                  <button
                                      type="button"
                                      className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                      onClick={handleAddPrescription}
                                  >
                                      Add Prescription
                                  </button>
                                  <button
                                                className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                                onClick={() =>
                                                    setShowModal(false)
                                                }
                                            >
                                                Cancel
                                            </button>
                              </div>
                          </form>
                      </div>
                  </div>
                </>
            ) : null}
        </div>
    );
}

export default PrescriptionAdd;
