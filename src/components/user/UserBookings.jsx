import React, { useEffect, useState } from 'react';

import {fetchUserBookingHistory} from '../../Services/UserService'
export const UserBookings = () => {
  const [bookings,setBookings]=useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      const data= await fetchUserBookingHistory()
      if (data){
        setBookings(data.user_bookings)
       
      }
     
    }
    fetchData()
    
  },[])

  console.log(bookings,'booking');




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
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-600 font-medium">Status:</p>
            {/* <p className="text-lg font-semibold text-indigo-600">
              {booking.payment_status}
            </p> */}
            <p className={`text-lg font-semibold ${booking.is_paid ? 'text-indigo-600' : 'text-red-600'}`}>
            {booking.is_paid ? booking.payment_status : 'Payment Failed'}
          </p>
          </div>
        </div>
    
  );
})}

     

      
        

      </div>
    </div>
  );
};



