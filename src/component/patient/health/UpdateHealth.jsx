import React, { useState, useEffect } from 'react';
import { BLOODTYPE } from '../Question';
import { useNavigate, Link } from 'react-router-dom';
import {  
    useSelector,
    useDispatch
  } from 'react-redux'
  import { getUserMeOrganization } from '../../../features/auth/authSlice';
  import { updateHealth } from '../../../features/health/healthSlice';
  import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UpdateHealth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const userOrganization = useSelector((state) => state.auths.userOrganization)
    const initialWeight = userOrganization.health ? userOrganization.health.weight || '' : '';
    const initialHeight = userOrganization.health ? userOrganization.health.height || '' : '';
    const initialBloodType = userOrganization.health ? userOrganization.health.blood_type || '' : '';
    const initialDob = userOrganization.health ? userOrganization.health.date_of_birth || '' : '';  
    const healthId = userOrganization.health ? userOrganization.health.id || '' : '';  

    const [weight, setWeight] = useState(initialWeight);
    const [height, setHeight] = useState(initialHeight);
    const [bloodType, setBloodType] = useState(initialBloodType);
    const [dob, setDob] = useState(initialDob);
    console.log("@%%%%%%%%%%%%%%%%%%%%%%%%",userOrganization)

    useEffect(() => {
        dispatch(getUserMeOrganization());
        }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestBody = {
              weight: weight,
              height: height,
              blood_type: bloodType,
              date_of_birth: dob,
              healthid: healthId
          };
        console.log("~~~~~~~~~~~~",requestBody )
        dispatch(updateHealth(requestBody));
        toast.success("Health Updated successfully!");
        setShowModal(false);
    };

    return (
        <>
            <ToastContainer />
            <div className="flex items-center justify-center h-10">
                <button
                    className="px-6 py-3 text-white bg-gray-800 rounded-md"
                    type="button"
                    onClick={() => setShowModal(true)}
                >
                    Update your Health Status
                </button>
            </div>
            {showModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                                <div className="mt-3 sm:flex">
                                    <div className="mt-2 text-center sm:ml-4 sm:text-left">
                                        <div className="mt-2">
                                            <h2 class="text-black text-2xl font-bold mb-2">Your Health Status</h2>
                                            <div className="mx-auto w-full max-w-[550px] bg-white">
                                                <form>
                                                    <div className="flex flex-wrap -mx-3">
                                                    <div className="w-full sm:w-1/2 px-3">
                                                        <div className="mb-5">
                                                        <label htmlFor="description" className="mb-3 block text-base font-medium text-[#07074D]">
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
                                                    </div>
                                                    <div className="w-full sm:w-1/2 px-3">
                                                        <div className="mb-5">
                                                        <label htmlFor="description" className="mb-3 block text-base font-medium text-[#07074D]">
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
                                                    </div>
                                                    </div>
                                                    <div className="mb-5">
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
                                                    <div className="-mx-3 flex flex-wrap">
                                                    <div className="w-full sm:w-1/2 px-3">
                                                        <div className="mb-5">
                                                        <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
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
                                                </form>
                                            </div>
                                        </div>
                                        <div className="items-center gap-2 mt-3 sm:flex">
                                            <button
                                                className="w-full mt-2 p-2.5 flex-1 text-white bg-gray-800 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                                onClick={handleSubmit}
                                            >
                                                Update
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
}

export default UpdateHealth;