import React, { useEffect, useState } from 'react';
import { fetchBooking } from '../../Services/AdminService';
import { server } from '../../server';
import { Link } from 'react-router-dom';
import { AiFillFileAdd } from 'react-icons/ai';

export const AllBooking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchBooking();
      if (response) {
        setBookings(response);
    
      }
    };
    fetchData();
  }, []);

 

  return (
    <div className='bg-blue-300 min-h-screen'>
      <div className='flex h-20 justify-center items-center'>
        <h1 className='text-3xl font-semibold'>BOOKINGS:</h1>
      </div>
      <div className='p-4 w-full max-w-screen-xl mx-auto'>

        {bookings.map((booking) => {
          const imageUrl = `${server}/media/${booking.doctor_image}`;

          return (
            <div
              key={booking.booking_id}
              className='bg-white rounded-lg shadow-md p-4 m-4 flex flex-col md:flex-row items-center justify-between'>
              <div className='flex items-center'>
                <img
                  src={imageUrl}
                  alt='Doctor'
                  className='w-16 h-16 rounded-full object-cover mr-4'
                />
                <div>
                  <h2 className='text-xl font-semibold'>{booking.doctor_name}</h2>
                  <p className='text-gray-600'>
                    {booking.slot_date}, {booking.slot_time}
                  </p>
                  <p className='text-gray-600'>Token: {booking.booking_id}</p>
                  <p className='text-gray-600'>Patient: {booking.patient_name}</p>
                </div>
              </div>

              <div className='mt-4 md:mt-0 text-center'>
                <p className='text-gray-600 font-medium'>Status:</p>
                <p
                  className={`text-lg font-semibold ${
                    booking.is_paid ? 'text-indigo-600' : 'text-red-600'
                  }`}>
                  {booking.is_paid ? booking.payment_status : 'Payment Failed'}
                </p>

                {booking.payment_status === 'completed' ? (
                  <Link
                    to={`/admin/view/report/${booking.booking_id}`}
                    className='text-indigo-600 hover:text-indigo-800'>
                    <AiFillFileAdd />
                  </Link>
                ) : (
                  ''
                )}
              </div>
            </div>
          );
        })}
      </div>
     
    </div>
  );
};
