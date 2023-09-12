import React from 'react'
import {Route,Routes} from 'react-router-dom'
import { DoctorsFullPage } from '../pages/User/DoctorsFullPage'
import { DoctorListpage } from '../pages/User/DoctorListpage'
import { DoctorDetailPage } from '../pages/User/DoctorDetailPage'
import { BookingSuccessPage } from '../pages/User/BookingSuccessPage'
import { UserBookingPage } from '../pages/User/UserBookingPage'
import { UserChat } from '../components/user/UserChat'
import { UserHelathReportPage } from '../pages/User/UserHelathReportPage'
import { UserChatPage } from '../pages/User/UserChatPage'
import jwt_decode from "jwt-decode"
import { getAccessToken } from '../helpers/auth'
import { LoginPage } from '../pages/LoginPage'
import { NotFoundPage } from '../pages/NotFoundPage'

export const UserRoutes = () => {

  const authToken = getAccessToken()

  if(!authToken){
    console.log('no token')
    return <LoginPage/>
  }
  const decode= jwt_decode(authToken);

  if (decode.role !== "user"){
    console.log('not user')
    return <LoginPage/>
  }  

  return (
    <Routes>
       <Route path="/doctor/full/list" element={<DoctorsFullPage/>}/>
       <Route path="/doctor/list/:departmentId" element={<DoctorListpage/>}/>
       <Route path="/doctor/details/:doctorId" element={<DoctorDetailPage/>}/>
       <Route path='/success' element={<BookingSuccessPage/>}/>
       <Route path='/bookings' element={<UserBookingPage/>}/>
       <Route path='/chat/:user_id/:profileId' element={<UserChatPage/>}/>
       <Route path='/health_report/:booking_id' element={<UserHelathReportPage/>}/>
       <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
