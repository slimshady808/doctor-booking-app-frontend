import React, { useEffect, useState } from 'react';
import { fetchBooking } from '../../Services/AdminService';
import { server } from '../../server';
import { Link } from 'react-router-dom';
import { AiFillFileAdd } from 'react-icons/ai';

export const AllBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchBookings = async (page) => {
    const response = await fetchBooking(page); // Pass the current page as an argument
    if (response) {
      setBookings(response.data.results);
      console.log(response.data);
    }
  };

  useEffect(() => {
    fetchBookings(currentPage); // Fetch data for the initial page
  }, [currentPage]);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='bg-white min-h-screen'>
      <div className='flex h-20 justify-center items-center'>
        <h1 className='text-3xl font-semibold'>BOOKINGS</h1>
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
        <div className='flex justify-center mt-4'>
          <a
            href='#'
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`flex items-center justify-center px-3 h-8 text-sm font-medium ${
              currentPage === 1
                ? 'text-gray-500 bg-white border border-gray-300 cursor-not-allowed'
                : 'text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            }`}
          >
            <svg
              className='w-3.5 h-3.5 mr-2'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 10'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M13 5H1m0 0 4 4M1 5l4-4'
              />
            </svg>
            Previous
          </a>
          <a
            href='#'
            onClick={handleNext}
            className='flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            Next
            <svg
              className='w-3.5 h-3.5 ml-2'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 10'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 5h12m0 0L9 1m4 4L9 9'
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
