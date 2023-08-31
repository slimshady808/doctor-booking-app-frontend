import React, { useEffect, useState } from 'react';
import { getAccess, getAccessToken } from '../../helpers/auth';
import { AiFillFileAdd } from "react-icons/ai";

import jwt_decode from 'jwt-decode'
import {fetchUserBookingHistory} from '../../Services/UserService'
import { Link } from 'react-router-dom';

export const UserBookings = () => {
  const [bookings,setBookings]=useState([])
  const [userId,setUserId]=useState('')


  
    useEffect(() => {
      
      const fetchData = async () => {
        const token = getAccessToken();
        const decode = jwt_decode(token);
        const fetchedUserId = decode.user_id;
  
        setUserId(fetchedUserId);
  
        const data = await fetchUserBookingHistory(fetchedUserId);
        if (data) {
          setBookings(data.user_bookings);
        }
      };
  
      fetchData();
    }, []); // Empty dependency array, so this runs only once on mount
  
    console.log(userId, 'userId');
    console.log(bookings, 'bookings');
  
    // Rest of your component JSX and logic





  return (
    <div>
      <div className=" flex h-20 justify-center items-center">
        <h1 className="text-3xl font-semibold">BOOKINGS</h1>
      </div>
      <div className="p-4">


      {bookings.map((booking) => {
  
  const imageUrl = `http://localhost:8000/media/${booking.doctor_image}`;

  return (

    <div className="bg-white rounded-lg shadow-md p-4 m-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={imageUrl}
              alt="Doctor"
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold">{booking.doctor_name}</h2>
              <p className="text-gray-600">
               {booking.slot_date},{booking.slot_time}
              </p>
              <p className="text-gray-600">Token:{booking.booking_id}</p>
              <p className="text-gray-600">Patient:{booking.patient_nam}</p>
            </div>
          </div>
     
          <div className="text-center ">
            <p className="text-gray-600 font-medium">Status:</p>
            {/* <p className="text-lg font-semibold text-indigo-600">
              {booking.payment_status}
            </p> */}
            <p className={`text-lg font-semibold ${booking.is_paid ? 'text-indigo-600' : 'text-red-600'}`}>
            {booking.is_paid ? booking.payment_status : 'Payment Failed'}
          </p>
         
          <p className='ml-9'>{booking.payment_status=='completed'? 
            <Link to={`/user/health_report/${booking.booking_id}`}><AiFillFileAdd/></Link>
          
          :''}</p>
          
          </div>
          
        </div>
    
  );
})}

     

      
        

      </div>
    </div>
  );
};



