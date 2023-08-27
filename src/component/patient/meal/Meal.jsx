import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import MealPage from './MealPage';
import { getUserMeOrganization } from '../../../features/auth/authSlice';

const Meal = () => {
    const dispatch = useDispatch();
    const userOrganization = useSelector((state) => state.auths.userOrganization)

    useEffect(() => {
     
        dispatch(getUserMeOrganization());
        }, [dispatch]);

    const mealPlansData = userOrganization?.patient_mealplans || [];
    console.log("&&&&&&&&&&&",mealPlansData)    

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <MealPage data={mealPlansData} />
    </div>
  );
};

export default Meal;

