import React, { useEffect, useState } from 'react';
import { useNavigate, useParams,useLocation } from 'react-router-dom';
import {fetchSlotData} from '../Services/UserService'
export const BookingSucces = () => {
  
  const navigate =useNavigate()
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const slotid = queryParams.get("slotid");
  const [slot,setSlot]=useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      const data = await fetchSlotData(slotid)
      if (data){
        setSlot(data)
      }
    }
    fetchData()
  },[slotid])
  console.log(slot)
 
  const doctorName = "Dr. John Doe";
  const appointmentDate = "August 15, 2023";
  const appointmentTime = "10:00 AM";
  const patientName = "Jane Smith";
const handleGoBack=()=>{
  navigate('/')
 
}

  return (
    <div className="bg-white h-screen">
    <div className="bg-white p-6 md:mx-auto">
        <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
            {/* Your SVG path */}
        </svg>
        <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
            <h1>Success</h1>
     
            <p className="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
            <p className="text-gray-600 my-2">You have successfully booked an appointment with:</p>
            <p className="text-indigo-600 font-semibold">{slot.doctor_name}</p>
            <p className="text-gray-600">Appointment Date: {slot.date}</p>
            <p className="text-gray-600">Appointment Time: {slot.time}</p>
            {/* <p className="text-gray-600">Patient Name: {patientName}</p> */}
            <p>Have a great day!</p>
            <div className="py-10 text-center">
                <button 
                onClick={handleGoBack}
                 className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                    GO BACK
                </button>
            </div>
        </div>
    </div>
</div>
  )
}

