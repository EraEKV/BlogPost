"use client";

import Link from 'next/link';
import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('AuthContext must be used within an AuthProvider');
  }
  
  const { login, error, token } = authContext;

  useEffect(() => {
    if (error) {
      toast.error('User not found', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (token) {
      router.push('/blogs');
    }
  }, [error, token, router]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();
    await login(trimmedUsername, trimmedPassword);
  };

  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value.trim());
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value.trim());
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-8">
      <div className="max-w-md mx-auto bg-gray-100 p-6 sm:p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mb-2 sm:mb-4 font-extrabold">Welcome back!</h1>
        <p className="text-gray-500 text-center mb-4 sm:mb-6">Enter your username and password to sign in to your account.</p>

        <div className="space-y-4">
          <div>
            <h3 className="text-md lg:text-lg mb-1">Username</h3>
            <input
              className="w-full border-2 border-gray-300 rounded-lg p-2 text-sm sm:text-base"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={handleChangeUsername}
            />
          </div>
          <div>
            <h3 className="text-md lg:text-lg mb-1">Password</h3>
            <div className="relative flex items-center">
              <input
                className="w-full border-2 border-gray-300 rounded-lg p-2 text-sm sm:text-base pr-12"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={handleChangePassword}
              />
              <svg 
                onClick={togglePasswordVisibility} 
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer size-5 sm:size-6 text-gray-600 ${showPassword ? 'block' : 'hidden'}`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              <svg 
                onClick={togglePasswordVisibility} 
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer size-5 sm:size-6 text-gray-600 ${showPassword ? 'hidden' : 'block'}`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <p className="mt-6 sm:mt-10 text-base font-medium">Do not registered? <Link className="underline hover:text-cyan-500" href={`/registration`}>Register Now</Link></p>
        </div>

        <div className="flex justify-center items-center">
          <button
            onClick={handleLogin}
            className="bg-black text-white py-4 px-6 rounded-xl mt-4 sm:mt-8 text-center text-base"
          >
            Sign in
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Login;
