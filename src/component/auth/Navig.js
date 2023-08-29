import React, { useEffect,useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import {  
  useSelector,
  useDispatch
} from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUserMeOrganization } from "../../features/auth/authSlice";
import Header from "../Header";
import jwt_decode from 'jwt-decode';

function Navig() {

  const userOrganization = useSelector((state) => state.auths.userOrganization)
    const accountType = userOrganization?.account_type;
    console.log("!@@@@@@@@@@@@@@",userOrganization)
  

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
      user,
      isLoading,
      isError,
      isSuccess,
      message
  } = useSelector(state => state.auths)

  useEffect(() => {
    dispatch(getUserMeOrganization());
    }, [dispatch]);
  useEffect(() => {
    if (isError) {
        toast.error(message)
    }
    
    // Redirect when logged in
    if (isSuccess) {
        const userAccountType = userOrganization?.account_type;

            if (userAccountType === "p") {
                navigate("/patient");
            } else if (userAccountType === "n") {
                navigate("/diet");
            } else {
                navigate("/"); // Replace "default" with your desired route
            }
        
    }

    
}, [isError, isSuccess, user, message, navigate, dispatch])



  }
  export default Navig;