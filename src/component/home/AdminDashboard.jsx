import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import '../../index.css';
import Navbar from '../NavBar';
import jwt_decode from 'jwt-decode';

function AdminDashboard() {
    const navigate = useNavigate();
    const [activeDiv, setActiveDiv] = useState(0);
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);

    const { user } = useSelector((state) => state.auths)
    const userData = JSON.parse(localStorage.getItem('userData'));
    const tokenn = userData?.token;
    const decodedToken = jwt_decode(tokenn);
    const userEmail = decodedToken?.email;
    const isAdminUser = decodedToken?.isAdmin;
    useEffect(()=> {
        if(userEmail==null){
        navigate('/login')
        }
        if(!isAdminUser){
            navigate('/')
        }
    },[user])


    const handleButtonClick = (divNumber) => {
        setActiveDiv(divNumber);
    };


    const buttonData = [
        { id: 0, text: "New Account" },
        { id: 1, text: "Deposit" },
        { id: 2, text: "Loan" }
      ];
    const focus="my-2 block rounded bg-slate-50 px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-red-900 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700 md:mr-4"
   
    return (
      <div>   
        <Navbar />
        <div className="p-4 sm:ml-80">
        <div class="p-4">
            <div class="w-full h-48 mb-4">
            </div>
            <div class="flex items-center justify-start h-12 mb-4">
                {buttonData.map((button, index) => (
                    <button
                        key={button.id}
                        className={activeButtonIndex === index ? focus : "my-2 block rounded bg-red-900 px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-slate-50 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700 md:mr-4"}
                        onClick={() => {setActiveButtonIndex(index); handleButtonClick(index)}}
                    >
                        {button.text}
                    </button>
                ))}
            </div>
            
        </div>
        </div>

      </div>
    );
  }
  export default AdminDashboard;