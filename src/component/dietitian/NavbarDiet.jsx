import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import {BiLogOut} from 'react-icons/bi'
import { logout,resetAuth } from '../../features/auth/authSlice';

const NavbarDiet = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const userOrganization = useSelector((state) => state.auths.userOrganization)
    const userName = userOrganization.first_name
    const fullName = userOrganization.first_name + " " + userOrganization.last_name;
    const handleLogout = () => {
      localStorage.removeItem('userData');
      dispatch(logout())
      dispatch(resetAuth())
      navigate("/login")
    };
  
  return (
    <nav className='bg-white border-gray-200 mx-2 px-2 py-2.5 rounded dark:bg-gray-800'>
      <div className='container flex justify-between items-center mx-auto pt-3'>
        <div className='flex items-center mx-auto'>
          <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
          Welcome, How are you feeling today?
          </span>
        </div>
        <div className='text-white text-2xl flex justify-end pr-4'>
          {fullName}
        </div>
        <div className='text-white text-2xl flex justify-end pr-4'>
          <BiLogOut onClick={handleLogout} />
        </div>
        
      </div>
    </nav>
  )
}

export default NavbarDiet