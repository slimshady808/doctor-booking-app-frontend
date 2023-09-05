import React, { useState } from "react";
import {forgotPassword} from '../../Services/UserService'
import {Toaster} from 'react-hot-toast'
import {toast} from 'react-hot-toast'
export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  // const [new_password,setNewPassword]=useState('')
  // const [confirmPassword,setConfirmPassword]=useState('')
  const handleSubmit =async (e) => {
    e.preventDefault();
    const data={
      email:e.target.email.value
    }
    const response= await forgotPassword(data)
    if (response.status===200){
      toast.success('please check email')
    }else{
      toast.error('no user available for this email')
    }
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-400 to-blue-600 py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position='top-center' reverseOrder='false' ></Toaster>
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
          Forgot Your Password?
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Don't worry! We'll help you reset your password.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Reset Link
            </button>
          </div>
        </form>
      </div>
    </div>


 
  );
};


  