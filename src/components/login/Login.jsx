import React from 'react'
import './Login.scss'

import  { useState } from 'react';

import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import Details from '../details/Details';

function Login() {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogout = () => {
     
      setLoggedIn(false);
    };
  
    const handleLoginSuccess = (credentialResponse) => {
      const decode = jwt_decode(credentialResponse.credential);
      console.log(decode);
      setLoggedIn(true);
    };
  
    const handleLoginError = () => {
      console.log('Login Failed');
    };
  return (
    <div className='login' >
  
    {!loggedIn ? (
      <GoogleOAuthProvider clientId="457813109578-s210epfrmn7gk3v5tr8bmk0psfo39e3j.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
        />
      </GoogleOAuthProvider>
    ) : (
      <div className='details'>
        <Details />
        <button  onClick={handleLogout}>Logout</button>
      </div>
      
    )}
  </div>
  )
}

export default Login