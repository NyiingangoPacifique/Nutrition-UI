import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import PrescriptionPage from './PrescriptionPage';
import { getUserMeOrganization } from '../../../features/auth/authSlice';

const Prescription = () => {
    const dispatch = useDispatch();
    const userOrganization = useSelector((state) => state.auths.userOrganization)

    useEffect(() => {
     
        dispatch(getUserMeOrganization());
        }, [dispatch]);

    const prescriptionData = userOrganization?.prescriptions || [];
    console.log("&&&&&&&&&&&",prescriptionData)    

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <PrescriptionPage data={prescriptionData} />
    </div>
  );
};

export default Prescription;

