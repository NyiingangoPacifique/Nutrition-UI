import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ProgressBar } from '@tremor/react';
import Header from "../Header";
import Footer from "../Footer";
import jwt_decode from 'jwt-decode';

function Home () {
  const navigate = useNavigate();
    const dispatch = useDispatch()

    // useEffect(() => {
    // const userData = JSON.parse(localStorage?.getItem('userData'));
    //   const tokenn = userData?.token;
    //   const decodedToken = jwt_decode(tokenn);
    //   const userEmail = decodedToken?.email;
    //   const isAdminUser = decodedToken?.isAdmin;
    //   console.log("---------isAdmin--------",userEmail)
    //   console.log("---------isAdmin--------",isAdminUser)
    //   if(isAdminUser)
    //   {
    //     navigate('/dashboard')
    //   }
    //   else {
    //     navigate('/')
    //   }
    // }, [ navigate, dispatch])

    const handleStart = () => {
      navigate('/product');
    };
    const nutri = "https://res.cloudinary.com/basha18/image/upload/v1692001522/docnutr_ok0qrq.png";
    const workshop= "https://cdni.iconscout.com/illustration/premium/thumb/family-with-diet-plan-6577255-5618751.png";
    const nutrition="https://img.freepik.com/premium-vector/nutrition-concept-design-vector-illustration-eps10-graphic_24908-10953.jpg?w=2000";
    const weightloss="https://res.cloudinary.com/basha18/image/upload/v1692005059/loss-removebg-preview_nlrpjn.png";
  return (
    <div className='w-full'>
  <div class="w-full leading-normal tracking-normal text-white gradient">
    <Header />
    {/* <!--Nav--> */}
    <section class="w-full bg-white border-b py-8">
      <div class="w-full container">
          <div  class="w-full container">
            <div class="flex flex-wrap flex-col-reverse sm:flex-row">
              <div class="w-full sm:w-1/2 p-6 mt-6">
                <div  className="bg-cover bg-center  h-auto text-slate-800 py-24 px-10 object-fill">
                  <div class="md:w-full p-">
                    <p class="text-3xl font-bold">Your Doctor's office is now online</p>
                    <p class="font-bold text-sm mb-10">From primary care to mental health, get treated from home.</p>
                    <a href="#" class="bg-gray-800 mt-10 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Get Treated</a>
                  </div>  
                </div>
              </div>
              <div class="w-full sm:w-1/2 p-6 mt-6">
                  <img src={nutri} alt="" />
              </div>
            </div>
          </div>
      </div>

   {/* Second */}
      <div>
        <div class="container my-12 mx-auto px-4 md:px-12">
          <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <div class="overflow-hidden rounded-lg shadow-lg bg-cyan-100">
                    <a href="#">
                      <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                        <div class="w-1/4 items-center justify-between leading-tight p-2 md:p-4-300">
                          <h1 class="">
                              <img class="block rounded-full" src={nutrition} alt="" />
                          </h1>
                        </div>
                        <div class="flex items-center justify-between leading-none p-2 md:p-4">
                                <p class="ml-2 text-sm text-slate-800">
                                    Nutrition
                                </p>
                        </div>
                      </div>
                    
                    </a>
                </div>
            </div>
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <div class="overflow-hidden rounded-lg shadow-lg bg-emerald-200">
                    <a href="#">
                      <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                        <div class="w-1/4 items-center justify-between leading-tight p-2 md:p-4">
                          <h1 class="">
                              <img class="block rounded-full" src={workshop} alt="" />
                          </h1>
                        </div>
                        <div class="flex items-center justify-between leading-none p-2 md:p-4">
                                <p class="ml-2 text-sm text-slate-800">
                                    Nutrition Workshop
                                </p>
                        </div>
                      </div>
                    
                    </a>
                </div>
            </div>
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <div class="overflow-hidden rounded-lg shadow-lg bg-pink-200">
                    <a href="#">
                      <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                        <div class="w-1/4 items-center justify-between leading-tight p-2 md:p-4">
                          <h1 class="">
                              <img class="block rounded-full" src={weightloss} alt="" />
                          </h1>
                        </div>
                        <div class="flex items-center justify-between leading-none p-2 md:p-4">
                                <p class="ml-2 text-sm text-slate-800">
                                    Weigth Loss 
                                </p>
                        </div>
                      </div>
                    
                    </a>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <a href="">
          <div className="w-full flex justify-center sm:flex-row items-center">
            <div class="flex justify-between leading-none p-2 md:p-4 ">
                    <p class="text-1xl font-bold text-slate-800">
                      Start a Visit
                    </p>
            </div>
            <div class="">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" 
              stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#000000" stroke-width="2" stroke-linecap="round" 
              stroke-linejoin="round"></path> </g></svg>
            </div>
          </div>
        </a>
      </div>
      
    </section>
    </div>

    {/* footer */}
    <Footer />

    </div>
  );
}

export default Home;
