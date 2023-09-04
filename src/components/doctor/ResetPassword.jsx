import React from 'react'
import {resetPassword} from '../../Services/DoctorService'

import { toast,Toaster } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
export const ResetPassword = () => {
const navigate=useNavigate()
const handleSubmit =async (e)=>{
    e.preventDefault()

    
    const data={
      'old_password':e.target.currentPassword.value,
      'new_password':e.target.newPassword.value
    }
    const response= await resetPassword(data)
    if (response===200){
      console.log(response.status)
     toast.success('password updated')
     navigate('/')
    }else{
      toast.error('password not match')
    }
    
 
}
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <Toaster position='top-center' reverseOrder='false' ></Toaster>
    <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
      <h2 className="text-2xl font-semibold mb-6">Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="currentPassword" className="block text-gray-700 font-medium">Current Password</label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            className="w-full mt-1 px-4 py-2 border rounded-md border-gray-300 focus:ring focus:ring-blue-200"
            placeholder="Enter your current password"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="newPassword" className="block text-gray-700 font-medium">New Password</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            className="w-full mt-1 px-4 py-2 border rounded-md border-gray-300 focus:ring focus:ring-blue-200"
            placeholder="Enter your new password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
        >
          Reset Password
        </button>
      </form>
    </div>
  </div>
  )
}
