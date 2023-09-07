import React, { useEffect, useState } from 'react'
import { getAccessToken } from '../../helpers/auth'
import jwt_decode from 'jwt-decode'
import {fetchBookingHistory} from '../../Services/DoctorService'
import { NoPendingBooking } from './NoPendingBooking'
import { Link } from 'react-router-dom'
import { BsFillChatRightDotsFill } from 'react-icons/bs';



export const DoctorHistory = () => {
  const [doctorId,setDoctorId]=useState('')
  const [booking,setBooking]=useState([])

  useEffect(()=>{
    const token=getAccessToken()
    const decode=jwt_decode(token)
    setDoctorId(decode.user_id)
    // console.log(decode.user_id)
  },[])

  useEffect(()=>{
    if (doctorId !==''){
      const fetchData = async () => {
        const data= await fetchBookingHistory(doctorId)
        setBooking(data);
      }
      fetchData();
    }
  },[doctorId]);
console.log(booking)


  return (

    <div className="relative overflow-x-auto shadow-md sm:rounded-sm w-full">
      <h1 class="text-4xl font-bold text-blue-600 py-4 px-32 ml-36" >
      Booking History
      </h1>
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
              status
            </th>
            <th scope="col" className="px-6 py-3">
              Report
            </th>
            <th scope="col" className="px-6 py-3">
              Messages
            </th>
          </tr>
        </thead>
        <tbody>
        {booking.map((bookingItem) => (

            <tr
              
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {bookingItem.booking_id}
              </td>
              <td className="px-6 py-4">{bookingItem.slot_date}</td>
              <td className="px-6 py-4">{bookingItem.slot_time}</td>
              <td className="px-6 py-4"> {bookingItem.patient_name}</td>
              <td className="px-6 py-4">  {bookingItem.patient_age}{bookingItem.user_id}</td>
              <td className="px-6 py-4">  {bookingItem.booking_status}</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <Link to={`/doctor/addReport/${bookingItem.booking_id}/${bookingItem.patient_id}/${doctorId}`}>Report</Link>
                  
                </a>
              </td>
              <td>
              
              
              <Link to={`/doctor/chat/${bookingItem.user_id}/${doctorId}`}><div className="flex items-center"><BsFillChatRightDotsFill className="text-green-500 ml-9 mr-2" />
            <span>chat
            
            </span> </div></Link>
       
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
      </div>
      </div>

    
  )
}
