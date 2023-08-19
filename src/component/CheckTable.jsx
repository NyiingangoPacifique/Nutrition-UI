import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Table from './Table';
import { getTargets,getTargetsPfnumberAchievements } from '../features/target/targetSlice';
const CheckTable = () => {
  const dispatch = useDispatch();
  const {
    isError,
    message,
    targets,
    targetsWithAchievement,
    isSuccess,
    isLoading,
  } = useSelector((state) => state.targets)
   const targetState = useSelector((state) => state.targets.targets);
   const pfnumberTargetsAchievement = useSelector((state) => state.targets.pfnumberWithAchievement)

   useEffect(() => {
     
    dispatch(getTargetsPfnumberAchievements());
    }, [dispatch]);

   function dataState(){
        if (Array.isArray(pfnumberTargetsAchievement)) {
            const targetsState = pfnumberTargetsAchievement;
            return targetsState;
        }
        else {
            const targetsState = [];
            return targetsState;
        }
    }
 
   useEffect(() => {
     
     dispatch(getTargets());
     }, [dispatch]);
     
     const accountAchievements = dataState().filter(target => target.target === "Deposit")
        .map(target => target.achievements);

    const arrData = [];
    for(let i =0; i<accountAchievements[0]?.length; i++){
        arrData.push(accountAchievements[0][i])
    }

    console.log("***********",arrData)
  const data = [
    // More data rows...
  ];

  return (
    <div>
      <div className="items-center justify-center w-full">
        <div className="xl:ml-auto">
          <Table data={arrData} />
        </div>
      </div>
    </div>
  )
  
};

export default CheckTable;
