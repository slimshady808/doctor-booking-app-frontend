import React, { useState } from "react";
import {Toaster} from 'react-hot-toast'
import {toast} from 'react-hot-toast'
import { useNavigate, useParams } from "react-router-dom";
import {resetPassword} from '../../Services/UserService'


export const ResetPasswordNew = () => {
  const navigate=useNavigate()
  const { uidb64, token } = useParams();
  const [newPassword,setNewPassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')


  const handleSubmit=async ()=>{
      if(newPassword !== confirmPassword){
        toast.error('passwords not maching')
        return
      }

      const data={
        uidb64,
        token,
        password:newPassword,
      };

      const response= await resetPassword(data)

      if (response.status===200){
        toast.success('password updated')
        navigate('/login')
      }else{
        console.log(response.response.data.message)
        toast.error(response.response.data.message)
      }

  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-400 to-blue-600 py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position='top-center' reverseOrder='false' ></Toaster>
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
          Please Enter Your New Password
        </h2>
        <p className="text-gray-600 text-center mb-6">
        Don't worry! We'll help you reset your password.
        </p>
        <form className="space-y-4" >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              new password
            </label>
            <input
              id="new_password"
              name="new_password"
              type="password"
              autoComplete="password"
              required
              className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
              placeholder="Enter new password"
       
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              confirm password
            </label>
            <input
              id="confirm_password"
              name="confirm_password"
              type="password"
              autoComplete="password"
              required
              className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
              placeholder="confirm password"
              
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              type="button"
              onClick={handleSubmit}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Reset Link
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
