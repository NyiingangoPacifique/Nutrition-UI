import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import jwtDecode from 'jwt-decode';
import Footer from "../Footer";
import { logout, resetAuth } from "../../features/auth/authSlice";
import { createconversation,resetConversation } from "../../features/Conversation/convoSlice";

function Home () {
  const navigate = useNavigate();
    const dispatch = useDispatch()
    const [loggedIn, setLoggedIn] = useState(false);
    const userOrganization = useSelector((state) => state.auths.userOrganization)
    console.log("&&&&&&&&&&&",userOrganization)
  useEffect(() => {
    const userToken = localStorage.getItem('userData');
    
    if (userToken) {
      const decodedToken = jwtDecode(userToken);
      // You might want to add additional checks here
      if (decodedToken.user_id) {
        setLoggedIn(true);
      }
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('userData');
    dispatch(logout())
    dispatch(resetAuth())
    setLoggedIn(false);
    navigate("/login")
  };

  useEffect(() => {
    // Reset appointment data when component unmounts or changes
    return () => {
      dispatch(resetConversation());
    };
  }, [dispatch]);

  const handleTreate = async (event) => {
    event.preventDefault();

    if (!userOrganization || userOrganization.length === 0) {
      console.log("++++++++++++++++++")
      navigate('/login'); 
    } else {
      console.log("====================")
      navigate('/patient'); 
    }
  };

  const handlehome = () => {
    navigate('/');
  };
  const handleLogin = () => {
    navigate('/login');
  };
    const nutri = "https://res.cloudinary.com/basha18/image/upload/v1692001522/docnutr_ok0qrq.png";
    const workshop= "https://cdni.iconscout.com/illustration/premium/thumb/family-with-diet-plan-6577255-5618751.png";
    const nutrition="https://img.freepik.com/premium-vector/nutrition-concept-design-vector-illustration-eps10-graphic_24908-10953.jpg?w=2000";
    const weightloss="https://res.cloudinary.com/basha18/image/upload/v1692005059/loss-removebg-preview_nlrpjn.png";
  return (
    <div className='w-full'>
      <div class="w-full leading-normal tracking-normal text-white gradient">
      {/* Header */}
        <div class="fixed w-full z-30 top-0 text-white bg-white">
            <header>
                <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a onClick={handlehome} class="flex items-center">
                            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">NATURAL REMEDIES</span>
                        </a>
                        <div class="flex items-center lg:order-2">
                          {!loggedIn && (
                            <a
                              onClick={handleLogin}
                              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                            >
                              Log In
                            </a>
                          )}
                          <a
                            onClick={handleLogout}
                            className={`text-gray-800 ${
                              loggedIn ? 'block' : 'hidden'
                            } dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800`}
                          >
                            Log Out
                          </a>
                          <a
                            className={`text-white bg-primary-700 ${
                              loggedIn ? 'hidden' : 'block'
                            } hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800`}
                          >
                            Get Started
                          </a>
                            
                        </div>
                        <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <a href="#" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a  href="#support" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Get Support</a>
                                </li>
                                <li>
                                    <a href="#about" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About us</a>
                                </li>
                                <li>
                                    <a  href="#how" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">How It work</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
      </div>
    {/* <!--Nav--> */}
    <section class="w-full bg-white border-b py-8 mt-32">
      <div class="w-full container">
          <div  class="w-full container">
            <div class="flex flex-wrap flex-col-reverse sm:flex-row">
              <div class="w-full sm:w-1/2 p-6 mt-6">
                <div  className="bg-cover bg-center  h-auto text-slate-800 py-24 px-10 object-fill">
                  <div class="md:w-full p-">
                    <p class="text-3xl font-bold">Your Dietitian's office is now online</p>
                    <p class="font-bold text-sm mb-10">Receive nutrition & diet recommendations from a registered dietitian from home.</p>
                    <a href="#" onClick={handleTreate} class="bg-gray-800 mt-10 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Get Treated</a>
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
      <div class="mt-20">
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
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 mt-20">
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
      <div class="mb-20">
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
    {/* Get Support */}
    <div class="bg-gray-100" id="support" >
    <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="mt-12 md:mt-0">
              <img src="https://res.cloudinary.com/basha18/image/upload/v1693295183/organic-flat-customer-support-illustration_23-2148899173_mutxk3.avif" alt="About Us Image" class="object-cover rounded-lg shadow-md"/>
            </div>
            <div class="max-w-lg">
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">Get Support from Home</h2>
                <h3 class="text-2xl font-bold text-gray-900 sm:text-2xl">What's the difference between Natural Remedies Ltd nutrition services and weight loss treatment?</h3>
                <p class="mt-4 text-gray-600 text-lg">Nutrition services are led by a registered dietitian. You should connect
                    with a registered dietitian if you are looking to:</p>
                <ul class="list-disc mt-4">
                  <li class="text-gray-600">manage a chronic disease like diabetes, heart disease, high blood pressure, or high cholesterol</li>
                  <li class="text-gray-600">gain or lose weight</li>
                  <li class="text-gray-600">manage digestive conditions, allergies, or food sensitivities</li>
                  <li class="text-gray-600">improve athletic performance</li>
                  <li class="text-gray-600">receive support in going vegetarian or vegan</li>
                  <li class="text-gray-600">receive nutrition support during, or after pregnancy</li>
                </ul>

            </div>
            
        </div>
    </div>
    </div>
    </div>
    {/* About us */}
    <div class="" id="about" >
      <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div class="max-w-lg">
                  <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
                  <p class="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                      eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                      Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                      malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
                  <div class="mt-8">
                      <a href="#" class="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                          <span class="ml-2">&#8594;</span></a>
                  </div>
              </div>
              <div class="mt-12 md:mt-0">
                  <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" class="object-cover rounded-lg shadow-md"/>
              </div>
          </div>
      </div>
    </div>
    {/* How it Works */}
    <div id="how" class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">

      <div class="text-center">
          <h3 class="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
              How it <span class="text-gray-900">Works?</span>
          </h3>

      </div>

      <div class="mt-20">
          <ul class="md:grid md:grid-cols-3 md:col-gap-10 md:row-gap-10">

              <li class=" bg-gray-100 p-5 pb-10 text-center">
                  <div class="flex flex-col items-center">
                      <div class="flex-shrink-0 relative top-0 -mt-16">
                          <div
                              class="flex items-center justify-center h-20 w-20 rounded-full bg-gray-900 text-white border-4 border-white text-xl font-semibold">
                              1
                          </div>
                      </div>
                      <div class="mt-4">
                          <h4 class="text-lg leading-6 font-semibold text-gray-900">Describe Your Symptoms</h4>
                          <p class="mt-2 text-base leading-6 text-gray-500">
                          Answer questions about your health condition online.
                          </p>
                      </div>
                  </div>
              </li>
              <li class=" bg-gray-100 p-5 pb-10 text-center">
                  <div class="flex flex-col items-center">
                      <div class="flex-shrink-0 relative top-0 -mt-16">
                          <div
                              class="flex items-center justify-center h-20 w-20 rounded-full bg-gray-900 text-white border-4 border-white text-xl font-semibold">
                              2
                          </div>
                      </div>
                      <div class="mt-4">
                          <h4 class="text-lg leading-6 font-semibold text-gray-900">Connect with a Medical Provider</h4>
                          <p class="mt-2 text-base leading-6 text-gray-500">
                          A medical provider will review your responses and send an appropriate treatment plan. Your care is evidence-based and personalized at every visit.
                          </p>
                      </div>
                  </div>
              </li>
              <li class=" bg-gray-100 p-5 pb-10 text-center">
                  <div class="flex flex-col items-center">
                      <div class="flex-shrink-0 relative top-0 -mt-16">
                          <div
                              class="flex items-center justify-center h-20 w-20 rounded-full bg-gray-900 indigo-500 text-white border-4 border-white text-xl font-semibold">
                              3
                          </div>
                      </div>
                      <div class="mt-4">
                          <h4 class="text-lg leading-6 font-semibold text-gray-900">Get Whole-person Care</h4>
                          <p class="mt-2 text-base leading-6 text-gray-500">
                          Your care team will respond to any questions through our secure messaging platform and you can get medication at your preferred pharmacy.
                          </p>
                      </div>
                  </div>
              </li>

          </ul>
      </div>

      </div>

    {/* footer */}
    <Footer />

    </div>
  );
}

export default Home;
