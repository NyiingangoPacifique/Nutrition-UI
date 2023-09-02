import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PrescriptionAdd from './PrescriptionAdd';
import { createPrescription, getOnePrescription, getPrescription, resetPrescription } from '../../features/prescription/prescriptionSlice';

function Prescription() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allPrescription = useSelector((state) => state.prescriptions.prescriptions);

    // State to track the selected prescription for updating
    const [selectedPrescription, setSelectedPrescription] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open the modal with prescription details for updating
    const openModal = (prescription) => {
        setSelectedPrescription(prescription);
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setSelectedPrescription(null);
        setIsModalOpen(false);
    };

    return (
        <div>
            <PrescriptionAdd />
            <h1 className="text-3xl text-center mt-8">Application Appointments</h1>
            <div className="flex justify-center mt-4">
                <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
                    <table className="w-full table-fixed">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Title</th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Description</th>
                                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {allPrescription.map((prescription) => (
                                <tr
                                    key={prescription.id}
                                    onClick={() => openModal(prescription)} // Open modal on row click
                                    style={{ cursor: 'pointer' }}
                                >
                                    <td className="py-4 px-6 border-b border-gray-200 truncate">{prescription.title}</td>
                                    <td className="py-4 px-6 border-b border-gray-200">{prescription.description}</td>
                                    <td className="py-4 px-6 border-b border-gray-200">
                                        <span className={`bg-${prescription.status === 'confirmed' ? 'green' : 'red'}-500 text-black py-1 px-2 rounded-full text-xs`}>
                                            {prescription.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {isModalOpen && selectedPrescription && (
                // Modal component for updating prescription
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="modal-container bg-white w-96 p-4 rounded-lg shadow-lg">
                        <h2 className="text-lg font-semibold mb-2">Update Prescription</h2>
                        <p>Title: {selectedPrescription.title}</p>
                        <p>Description: {selectedPrescription.description}</p>
                        {/* Add input fields for updating prescription details */}
                        <button onClick={closeModal}>Close Modal</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Prescription;
