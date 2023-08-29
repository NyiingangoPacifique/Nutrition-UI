import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { Outlet } from 'react-router'
import jwtDecode from 'jwt-decode';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { getUserMeOrganization } from '../../features/auth/authSlice'
const Layout = ({ children }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const userOrganization = useSelector((state) => state.auths.userOrganization)
    const accountType = userOrganization.account_type;
    console.log("!@@@@@@@@@@@@@@",accountType)
    useEffect(() => {
        dispatch(getUserMeOrganization());
        }, [dispatch]);
        if (accountType !== "p") {
           navigate("/")
        }
        
    return (
        <>
            <div className='flex flex-auto h-screen'>
                <Sidebar />
                <div className='grow'>
                    <Navbar />
                    <div className='m-5'><Outlet/></div>
                    <></>
                </div>
            </div>
        </>
    )
}

export default Layout