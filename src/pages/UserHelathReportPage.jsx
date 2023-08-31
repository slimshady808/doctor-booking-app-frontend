import React, { useEffect } from 'react'
import {  useParams } from 'react-router-dom';
import {userHelthReport} from '../Services/UserService'
export const UserHelathReportPage = () => {
  const {booking_id}=useParams()

  useEffect(()=>{
    fetchData= async()=>{
    data= await userHelthReport(booking_id)
    } 
  })


  console.log('hi',booking_id)
  return (
    <div>UserHelathReportPage{booking_id}</div>
  )
}
