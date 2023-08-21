import React, { useEffect, useState } from 'react';
import { getAccess, getAccessToken } from '../../helpers/auth';
import jwt_decode from 'jwt-decode'
import {fetchPendingBooking} from '../../Services/DoctorService'
import { NoPendingBooking } from './NoPendingBooking';
import { Link } from 'react-router-dom';

const PendingList = () => {
  const [doctorId,setDoctorId]=useState('')
  const[booking,setBooking]=useState([])
  
  useEffect(() => {
    const token = getAccessToken();
    const decode = jwt_decode(token);
    setDoctorId(decode.user_id);
  }, []);

  useEffect(() => {
    if (doctorId !== '') {  // Check if doctorId is not empty
      const fetchData = async () => {
        const data = await fetchPendingBooking(doctorId);
        setBooking(data);
      };
      fetchData();
    }
  }, [doctorId]);

  console.log('docid', doctorId);
  console.log(booking);
  




 


  return (
  
    <div className="relative overflow-x-auto shadow-md sm:rounded-sm w-full">
       <div className="pr-6 ">
       {booking.length===0 ?(<NoPendingBooking/>):(
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Appointment date
            </th>
            <th scope="col" className="px-6 py-3">
              Time
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Age
            </th>
            <th scope="col" className="px-6 py-3">
              Report
            </th>
            <th scope="col" className="px-6 py-3">
              Test
            </th>
          </tr>
        </thead>
        <tbody>
        {booking.map((bookingItem) => (

            <tr
            key={bookingItem.booking_id}
              
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {bookingItem.booking_id}
              </td>
              <td className="px-6 py-4">{bookingItem.slot_date}</td>
              <td className="px-6 py-4">{bookingItem.slot_time},{bookingItem.patient_id}</td>
              <td className="px-6 py-4"> {bookingItem.patient_name}</td>
              <td className="px-6 py-4"> {bookingItem.patient_age}</td>
              <td className="px-6 py-4">
                <a
                  
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
               <Link to={`/doctor/addReport/${bookingItem.booking_id}/${bookingItem.patient_id}/${doctorId}`}>add/edit</Link>
               

                  
                </a>
              </td>
              <td className="px-6 py-4">
                <a
                  
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                
                <Link to={`/doctor/addTest/${bookingItem.booking_id}/${bookingItem.patient_id}/${doctorId}`}>add/edit</Link>
               
              
                  
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
       )}
      
      </div>
     
      </div>

  
  );
};

export default PendingList;
