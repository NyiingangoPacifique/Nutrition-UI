import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
// import { logout,resetAuth } from "../features/auth/authSlice";

import userEvent from "@testing-library/user-event";

const logo="https://res.cloudinary.com/basha18/image/upload/v1685712936/agro-removebg-preview_sloobb.png"
function Navbar() {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [isActive, setIsActive] = useState(false)
    // const { user } = useSelector((state) => state.auths)
    

    // const handleLogout = () => {
    //     dispatch(logout())
    //     dispatch(resetAuth())
    //     navigate('/login')
    // }

    const handleNav = () => {
        navigate('/dashboard');
      };

      const handleProduct = () => {
        navigate('/product');
      };
      const handleOrder = () => {
        navigate('/order');
      };
      const handleCombo = () => {
        navigate('/combination');
      };

      const handlehome = () => {
        navigate('/');
      };


    const handleClick = event => {
        setIsActive(current => !current);
    }

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };


    return (
      <div>
        <div class="w-full mb-14">
            <div class="flex-1 flex flex-col">
                    <div class="z-10 px-4 flex justify-between bg-white h-16 border-b-2 w-full fixed">
                        <ul class="flex items-center">
                            <li class="h-14 w-24">
                                <a
                                class="cursor-pointer"
                                onClick={handlehome}
                                >
                                    <img
                                        class="h-full w-auto mx-auto"
                                        src={logo}
                                        alt="svelte logo" />
                                </a>    
                            </li>
                        </ul>
                        <ul class="flex items-center">
                            <li>
                                <div class="flex items-center justify-center h-24">
                                    <h1 class="text-2xl text-slate-900 font-bold">Agro Input Store Dashboard</h1>
                                </div>
                            </li>
                        </ul>
                        <ul class="flex items-center">
                            <li class="pr-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-bell">
                                    <path
                                        d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                </svg>
                            </li>
                            <li class="h-10 w-10">
                                <svg fill="#000000" class="w-6 h-full mx-auto" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <path d="M4 28q0 0.832 0.576 1.44t1.44 0.576h20q0.8 0 1.408-0.576t0.576-1.44q0-1.44-0.672-2.912t-1.76-2.624-2.496-2.144-2.88-1.504q1.76-1.088 2.784-2.912t1.024-3.904v-1.984q0-3.328-2.336-5.664t-5.664-2.336-5.664 2.336-2.336 5.664v1.984q0 2.112 1.024 3.904t2.784 2.912q-1.504 0.544-2.88 1.504t-2.496 2.144-1.76 2.624-0.672 2.912z"></path> </g></svg>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-100 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span class="sr-only">Open sidebar</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>
            <aside id="sidebar-multi-level-sidebar" class="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="p-3 m-5">
                    
                </div>
                <div class="h-full px-3 py-4 overflow-y-auto bg-sky-600">
                    <ul class="space-y-2">
                        <li>
                            <a href="#" className={isActive ? 'bg-slate-50 text-red-900 flex items-center p-2 text-base font-normal rounded-lg' : 'flex items-center p-2 text-base font-normal text-slate-50 rounded-lg hover:bg-gray-100 hover:text-red-900'} onClick={handleNav} >
                                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12C12 11.4477 12.4477 11 13 11H19C19.5523 11 20 11.4477 20 12V19C20 19.5523 19.5523 20 19 20H13C12.4477 20 12 19.5523 12 19V12Z" stroke="#f8fafc" stroke-width="2" stroke-linecap="round"></path> <path d="M4 5C4 4.44772 4.44772 4 5 4H8C8.55228 4 9 4.44772 9 5V19C9 19.5523 8.55228 20 8 20H5C4.44772 20 4 19.5523 4 19V5Z" stroke="#f8fafc" stroke-width="2" stroke-linecap="round"></path> <path d="M12 5C12 4.44772 12.4477 4 13 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 19.5523 8 19 8H13C12.4477 8 12 7.55228 12 7V5Z" stroke="#f8fafc" stroke-width="2" stroke-linecap="round"></path> </g></svg>
                                <span class="ml-3">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <button onClick={handleOpen} type="button" class="flex items-center w-full p-2 text-base font-normal text-slate-50 transition duration-75 rounded-lg group hover:bg-gray-100 hover:text-red-900" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <svg class="w-6 h-6 icon" viewBox="0 -0.5 1025 1025" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M447.427363 576.572637m-431.447814 0a431.447814 431.447814 0 1 0 862.895628 0 431.447814 431.447814 0 1 0-862.895628 0Z" fill="#FFFFFF"></path><path d="M447.427363 1024c-246.884027 0-447.427363-200.543336-447.427363-447.427363s200.543336-447.427363 447.427363-447.427363 447.427363 200.543336 447.427363 447.427363-200.543336 447.427363-447.427363 447.427363z m0-862.895628c-229.306523 0-415.468266 186.161742-415.468266 415.468265s186.161742 415.468266 415.468266 415.468266 415.468266-186.161742 415.468265-415.468266-186.161742-415.468266-415.468265-415.468265z" fill="#f8fafc"></path><path d="M447.427363 576.572637m-324.384838 0a324.384838 324.384838 0 1 0 648.769676 0 324.384838 324.384838 0 1 0-648.769676 0Z" fill="#7f1d1d"></path><path d="M447.427363 917.736001c-187.759697 0-340.364387-152.60469-340.364387-340.364386S259.667666 237.007228 447.427363 237.007228s340.364387 152.60469 340.364387 340.364387-152.60469 340.364387-340.364387 340.364386z m0-649.568653c-170.182193 0-308.405289 138.223096-308.40529 308.405289s138.223096 308.405289 308.40529 308.40529 308.405289-138.223096 308.405289-308.40529S617.609556 268.167348 447.427363 268.167348z" fill="#f8fafc"></path><path d="M447.427363 576.572637m-208.53311 0a208.53311 208.53311 0 1 0 417.06622 0 208.53311 208.53311 0 1 0-417.06622 0Z" fill="#FFFFFF"></path><path d="M447.427363 801.884273c-123.841502 0-224.512659-100.671157-224.512659-224.512658S323.585861 352.059978 447.427363 352.059978s224.512659 100.671157 224.512659 224.512659-100.671157 225.311636-224.512659 225.311636zM447.427363 384.019076c-106.263999 0-192.553562 86.289563-192.553562 192.553561S341.163364 769.126199 447.427363 769.126199s192.553562-86.289563 192.553561-192.553562S553.691362 384.019076 447.427363 384.019076z" fill="#f8fafc"></path><path d="M447.427363 576.572637m-101.470134 0a101.470134 101.470134 0 1 0 202.940268 0 101.470134 101.470134 0 1 0-202.940268 0Z" fill="#7f1d1d"></path><path d="M447.427363 694.02232c-64.717172 0-117.449683-52.732511-117.449683-117.449683S382.710191 459.122954 447.427363 459.122954 564.877046 511.855465 564.877046 576.572637c0 65.51615-52.732511 117.449683-117.449683 117.449683z m0-202.141291c-47.139669 0-85.490585 38.350917-85.490586 85.490586S400.287694 662.063223 447.427363 662.063223 532.917948 623.712306 532.917948 576.572637 494.567031 491.881029 447.427363 491.881029z" fill="#f8fafc"></path><path d="M1008.309521 114.76368L878.875177 243.399047l-100.671157 2.396933 2.396933-100.671157L910.035297 16.489456l-3.994887 102.269112z" fill="#C2CDDC"></path><path d="M779.002998 261.775528c-3.994887 0-7.989774-1.597955-11.185684-4.793864-3.19591-3.19591-4.793865-7.190797-4.793865-11.984662l2.396933-100.671157c0-3.994887 1.597955-7.989774 4.793864-11.185684L899.64859 4.504795c4.793865-4.793865 11.984662-5.592842 17.577504-3.19591 6.391819 2.396932 9.587729 8.788752 9.587729 15.180571l-3.19591 84.691608 84.691608-3.19591c6.391819 0 12.783639 3.19591 15.180572 9.58773s1.597955 12.783639-3.19591 17.577503l-129.434344 128.635367c-3.19591 3.19591-7.190797 4.793865-11.185684 4.793864l-100.671157 3.19591zM796.580501 152.31562l-1.597954 77.500811 77.500811-1.597955 95.877292-95.877292-61.521263 2.396932c-4.793865 0-8.788752-1.597955-11.984661-4.793864s-4.793865-7.190797-4.793865-11.984662l2.396932-61.521262-95.877292 95.877292z" fill="#f8fafc"></path><path d="M455.417137 580.567524c-3.994887 0-7.989774-1.597955-11.185684-4.793864-6.391819-6.391819-6.391819-15.979549 0-22.371368l525.727152-525.727152c6.391819-6.391819 15.979549-6.391819 22.371368 0s6.391819 15.979549 0 22.371368L466.602821 575.77366c-3.19591 3.19591-7.190797 4.793865-11.185684 4.793864z" fill="#f8fafc"></path><path d="M942.793372 188.269604h-95.078315c-8.788752 0-15.979549-7.190797-15.979548-15.979548V78.809696c0-8.788752 7.190797-15.979549 15.979548-15.979549s15.979549 7.190797 15.979549 15.979549v77.500811h79.098766c8.788752 0 15.979549 7.190797 15.979548 15.979549s-7.190797 15.979549-15.979548 15.979548z" fill="#f8fafc"></path></g></svg>
                                <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Product</span>
                                <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                            {open ? (
                            <ul id="dropdown-example" class="py-2 space-y-2">
                                
                                <li>
                                <a href="#" onClick={handleProduct} class="flex items-center w-full p-2 text-base font-normal text-slate-50 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-red-900">
                                    <svg fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M17,10.82l-3.09,1.644L15.09,17,12,14.13,8.91,17l1.18-4.536L7,10.82l3.82-.188L12,7l1.18,3.632ZM13,4V2a1,1,0,0,0-2,0V4a1,1,0,0,0,2,0ZM11,20v2a1,1,0,0,0,2,0V20a1,1,0,0,0-2,0ZM19.778,4.222a1,1,0,0,0-1.414,0L16.95,5.636A1,1,0,1,0,18.364,7.05l1.414-1.414A1,1,0,0,0,19.778,4.222ZM4.222,19.778a1,1,0,0,0,1.414,0L7.05,18.364A1,1,0,0,0,5.636,16.95L4.222,18.364A1,1,0,0,0,4.222,19.778ZM22,11H20a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2ZM2,13H4a1,1,0,0,0,0-2H2a1,1,0,0,0,0,2Zm16.364,6.778a1,1,0,0,0,1.414-1.414L18.364,16.95a1,1,0,0,0-1.414,1.414ZM7.05,7.05a1,1,0,0,0,0-1.414L5.636,4.222A1,1,0,0,0,4.222,5.636L5.636,7.05a1,1,0,0,0,1.414,0Z"></path></g></svg>
                                    <span class="ml-3">Product</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={handleCombo} class="flex items-center w-full p-2 text-base font-normal text-slate-50 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-red-900">
                                    <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" d="M3 10V15C3 16.8856 3 17.8284 3.58579 18.4142C4.17157 19 5.11438 19 7 19L17 19C18.8856 19 19.8284 19 20.4142 18.4142C21 17.8284 21 16.8856 21 15V10H3Z" fill="#f8fafc"></path> <path d="M3.5 10H20.5" stroke="#f8fafc" stroke-width="2" stroke-linecap="round"></path> <path d="M6 14H8" stroke="#f8fafc" stroke-width="2" stroke-linecap="round"></path> <path d="M11 14H13" stroke="#f8fafc" stroke-width="2" stroke-linecap="round"></path> <path d="M3 9C3 7.11438 3 6.17157 3.58579 5.58579C4.17157 5 5.11438 5 7 5H12H17C18.8856 5 19.8284 5 20.4142 5.58579C21 6.17157 21 7.11438 21 9V12V15C21 16.8856 21 17.8284 20.4142 18.4142C19.8284 19 18.8856 19 17 19H12H7C5.11438 19 4.17157 19 3.58579 18.4142C3 17.8284 3 16.8856 3 15V12V9Z" stroke="#f8fafc" stroke-width="2" stroke-linejoin="round"></path> </g></svg>
                                    <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Combination</span>
                                    </a>
                                </li>
                            </ul>
                            ) : null}
                        </li>
                        <li>
                            <button onClick={handleOpen} type="button" class="flex items-center w-full p-2 text-base font-normal text-slate-50 transition duration-75 rounded-lg group hover:bg-gray-100 hover:text-red-900" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <svg class="w-6 h-6 icon" viewBox="0 -0.5 1025 1025" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M447.427363 576.572637m-431.447814 0a431.447814 431.447814 0 1 0 862.895628 0 431.447814 431.447814 0 1 0-862.895628 0Z" fill="#FFFFFF"></path><path d="M447.427363 1024c-246.884027 0-447.427363-200.543336-447.427363-447.427363s200.543336-447.427363 447.427363-447.427363 447.427363 200.543336 447.427363 447.427363-200.543336 447.427363-447.427363 447.427363z m0-862.895628c-229.306523 0-415.468266 186.161742-415.468266 415.468265s186.161742 415.468266 415.468266 415.468266 415.468266-186.161742 415.468265-415.468266-186.161742-415.468266-415.468265-415.468265z" fill="#f8fafc"></path><path d="M447.427363 576.572637m-324.384838 0a324.384838 324.384838 0 1 0 648.769676 0 324.384838 324.384838 0 1 0-648.769676 0Z" fill="#7f1d1d"></path><path d="M447.427363 917.736001c-187.759697 0-340.364387-152.60469-340.364387-340.364386S259.667666 237.007228 447.427363 237.007228s340.364387 152.60469 340.364387 340.364387-152.60469 340.364387-340.364387 340.364386z m0-649.568653c-170.182193 0-308.405289 138.223096-308.40529 308.405289s138.223096 308.405289 308.40529 308.40529 308.405289-138.223096 308.405289-308.40529S617.609556 268.167348 447.427363 268.167348z" fill="#f8fafc"></path><path d="M447.427363 576.572637m-208.53311 0a208.53311 208.53311 0 1 0 417.06622 0 208.53311 208.53311 0 1 0-417.06622 0Z" fill="#FFFFFF"></path><path d="M447.427363 801.884273c-123.841502 0-224.512659-100.671157-224.512659-224.512658S323.585861 352.059978 447.427363 352.059978s224.512659 100.671157 224.512659 224.512659-100.671157 225.311636-224.512659 225.311636zM447.427363 384.019076c-106.263999 0-192.553562 86.289563-192.553562 192.553561S341.163364 769.126199 447.427363 769.126199s192.553562-86.289563 192.553561-192.553562S553.691362 384.019076 447.427363 384.019076z" fill="#f8fafc"></path><path d="M447.427363 576.572637m-101.470134 0a101.470134 101.470134 0 1 0 202.940268 0 101.470134 101.470134 0 1 0-202.940268 0Z" fill="#7f1d1d"></path><path d="M447.427363 694.02232c-64.717172 0-117.449683-52.732511-117.449683-117.449683S382.710191 459.122954 447.427363 459.122954 564.877046 511.855465 564.877046 576.572637c0 65.51615-52.732511 117.449683-117.449683 117.449683z m0-202.141291c-47.139669 0-85.490585 38.350917-85.490586 85.490586S400.287694 662.063223 447.427363 662.063223 532.917948 623.712306 532.917948 576.572637 494.567031 491.881029 447.427363 491.881029z" fill="#f8fafc"></path><path d="M1008.309521 114.76368L878.875177 243.399047l-100.671157 2.396933 2.396933-100.671157L910.035297 16.489456l-3.994887 102.269112z" fill="#C2CDDC"></path><path d="M779.002998 261.775528c-3.994887 0-7.989774-1.597955-11.185684-4.793864-3.19591-3.19591-4.793865-7.190797-4.793865-11.984662l2.396933-100.671157c0-3.994887 1.597955-7.989774 4.793864-11.185684L899.64859 4.504795c4.793865-4.793865 11.984662-5.592842 17.577504-3.19591 6.391819 2.396932 9.587729 8.788752 9.587729 15.180571l-3.19591 84.691608 84.691608-3.19591c6.391819 0 12.783639 3.19591 15.180572 9.58773s1.597955 12.783639-3.19591 17.577503l-129.434344 128.635367c-3.19591 3.19591-7.190797 4.793865-11.185684 4.793864l-100.671157 3.19591zM796.580501 152.31562l-1.597954 77.500811 77.500811-1.597955 95.877292-95.877292-61.521263 2.396932c-4.793865 0-8.788752-1.597955-11.984661-4.793864s-4.793865-7.190797-4.793865-11.984662l2.396932-61.521262-95.877292 95.877292z" fill="#f8fafc"></path><path d="M455.417137 580.567524c-3.994887 0-7.989774-1.597955-11.185684-4.793864-6.391819-6.391819-6.391819-15.979549 0-22.371368l525.727152-525.727152c6.391819-6.391819 15.979549-6.391819 22.371368 0s6.391819 15.979549 0 22.371368L466.602821 575.77366c-3.19591 3.19591-7.190797 4.793865-11.185684 4.793864z" fill="#f8fafc"></path><path d="M942.793372 188.269604h-95.078315c-8.788752 0-15.979549-7.190797-15.979548-15.979548V78.809696c0-8.788752 7.190797-15.979549 15.979548-15.979549s15.979549 7.190797 15.979549 15.979549v77.500811h79.098766c8.788752 0 15.979549 7.190797 15.979548 15.979549s-7.190797 15.979549-15.979548 15.979548z" fill="#f8fafc"></path></g></svg>
                                <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Order</span>
                                <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                            {open ? (
                            <ul id="dropdown-example" class="py-2 space-y-2">
                                
                                <li>
                                <a href="#" onClick={handleOrder} class="flex items-center w-full p-2 text-base font-normal text-slate-50 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-red-900">
                                    <svg fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M17,10.82l-3.09,1.644L15.09,17,12,14.13,8.91,17l1.18-4.536L7,10.82l3.82-.188L12,7l1.18,3.632ZM13,4V2a1,1,0,0,0-2,0V4a1,1,0,0,0,2,0ZM11,20v2a1,1,0,0,0,2,0V20a1,1,0,0,0-2,0ZM19.778,4.222a1,1,0,0,0-1.414,0L16.95,5.636A1,1,0,1,0,18.364,7.05l1.414-1.414A1,1,0,0,0,19.778,4.222ZM4.222,19.778a1,1,0,0,0,1.414,0L7.05,18.364A1,1,0,0,0,5.636,16.95L4.222,18.364A1,1,0,0,0,4.222,19.778ZM22,11H20a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2ZM2,13H4a1,1,0,0,0,0-2H2a1,1,0,0,0,0,2Zm16.364,6.778a1,1,0,0,0,1.414-1.414L18.364,16.95a1,1,0,0,0-1.414,1.414ZM7.05,7.05a1,1,0,0,0,0-1.414L5.636,4.222A1,1,0,0,0,4.222,5.636L5.636,7.05a1,1,0,0,0,1.414,0Z"></path></g></svg>
                                    <span class="ml-3">User Order</span>
                                    </a>
                                </li>
                            </ul>
                            ) : null}
                        </li>
                        
                    </ul>
                    <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-red-500 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="#7f1d1d" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 12L13 12" stroke="#f8fafc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9" stroke="#f8fafc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19" stroke="#f8fafc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <span class="ml-4">Log Out</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
  }
  export default Navbar;