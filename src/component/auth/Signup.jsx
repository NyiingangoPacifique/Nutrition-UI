import React, { useEffect,useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import {  
    useSelector,
    useDispatch
  } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import Header from "../Header";
import show from "../../image/eye-show.svg";
import hide from "../../image/eye-hide.svg";
import { register,resetAuth } from "../../features/auth/authSlice";

function Signup () {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [pwd, setPwd] = useState('');
    const [repwd, setRePwd] = useState('');
    const [inputFirstname, setInputFirstname] = useState('');
    const [inputLastname, setInputLastame] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputPhone, setInputPhone] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const [isRevealRePwd, setIsRevealRePwd] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        name: '',
        email: '',
        phone: ''
      })

    const handleLogin = () => {
        navigate('/login');
      };

      const {
        user,
        isLoading,
        isError,
        isSuccess,
        message
    } = useSelector(state => state.auths)  

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        
        // Redirect when logged in
        if (isSuccess) {
            toast.success('Register successful', {
                position: "top-center",
                autoClose: 3000, // 3 seconds
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });
            dispatch(resetAuth())
            toast.success('Register successful', {
                position: "top-center",
                autoClose: 3000, // 3 seconds
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });
            navigate('/login')
            
        }
    
        dispatch(resetAuth())
    }, [isError, isSuccess, user, message, navigate, dispatch])

    const onSubmit = (e) => {
    e.preventDefault() 
    const userData = {
        first_name: inputFirstname,
        last_name: inputLastname,
        password: pwd,
        password_confirm: repwd,
        email: inputEmail,
        phone_number: inputPhone
    }
    console.log("==========", userData);
    dispatch(register(userData))
    }  
    const img = "https://res.cloudinary.com/basha18/image/upload/v1685934785/login-removebg-preview_zcpc2m.png"
  
  return (
    <div>
        <div>
        <ToastContainer />
            <Header />
        </div>
        <div className='w-4/5 h-screen m-auto  flex'>  
            <div className='w-2/5 m-auto'>
                <img src={img} alt=""/>
                <div className='text-center my-4 mt-8'>
                    <p className='text-4xl'>Create Account to access your Dashboard</p>
                </div>
            </div>
            <div class="w-3/5 font-sans antialiased m-auto">
                    <div class="container mx-auto">
                        <div class="w-1/2 lg:w-full">
                            <div class="py-4 px-8 text-black text-xl border-b border-grey-lighter">Register here</div>
                            <form onSubmit={onSubmit} >
                            <div class="py-4 px-8">
                                <div class="flex mb-4">
                                    <div class="w-1/2 mr-1">
                                        <label class="block text-grey-darker text-sm font-bold mb-2" for="first_name">First Name</label>
                                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="first_name" type="text" 
                                        value={inputFirstname}
                                        onChange={e => setInputFirstname(e.target.value)}
                                         placeholder="Your first name"/>
                                    </div>
                                    <div class="w-1/2 ml-1">
                                        <label class="block text-grey-darker text-sm font-bold mb-2" for="last_name">Last Name</label>
                                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="last_name" type="text" 
                                        onChange={e => setInputLastame(e.target.value)}
                                        value={inputLastname} placeholder="Your last name"/>
                                    </div>
                                </div>
                                <div class="flex mb-4">
                                    <div class="w-1/2 mr-1">
                                        <label class="block text-grey-darker text-sm font-bold mb-2" for="email">Email Address</label>
                                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" 
                                        onChange={e => setInputEmail(e.target.value)}
                                        value={inputEmail} placeholder="Your email address"/>
                                    </div>
                                    <div class="w-1/2 ml-1">
                                        <label class="block text-grey-darker text-sm font-bold mb-2" for="first_name">Phone</label>
                                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="first_name" type="text" 
                                        onChange={e => setInputPhone(e.target.value)}
                                        value={inputPhone} placeholder="Your phone number"/>
                                    </div>
                                </div>
                                <div class="flex mb-4">
                                    
                                    <div class="w-1/2 ml-1">
                                        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">Password</label>
                                        <div className="relative flex w-full flex-wrap items-stretch mb-3">
                                        <input placeholder="Enter your password" class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                        type={isRevealPwd ? "text" : "password"}
                                        value={pwd}
                                        onChange={e => setPwd(e.target.value)}
                                        />
                                        <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                                            <img
                                                title={isRevealPwd ? "Hide password" : "Show password"}
                                                src={isRevealPwd ? hide : show}
                                                onClick={() => setIsRevealPwd(prevState => !prevState)}
                                                />
                                        </span>
                                        </div>
                                    </div>
                                    <div class="w-1/2 ml-1">
                                        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">Password Confirm</label>
                                        <div className="relative flex w-full flex-wrap items-stretch mb-3">
                                        <input placeholder="Enter your password" class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                        type={isRevealRePwd ? "text" : "password"}
                                        value={repwd}
                                        onChange={e => setRePwd(e.target.value)}
                                        />
                                        <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                                            <img
                                                title={isRevealRePwd ? "Hide password" : "Show password"}
                                                src={isRevealRePwd ? hide : show}
                                                onClick={() => setIsRevealRePwd(prevState => !prevState)}
                                                />
                                        </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-center justify-start mt-8">
                                    <button class="bg-gray-800 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded" type="submit">
                                        Sign Up
                                    </button>
                                    <div>
                                        <p class="text-center m-4">
                                            <a onClick={handleLogin} class="text-grey-dark text-sm no-underline hover:text-grey-darker cursor-pointer">I already have an account</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Signup;
