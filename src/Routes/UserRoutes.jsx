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


export const UserRoutes = () => {
  return (
    <Routes>
       <Route path="/doctor/full/list" element={<DoctorsFullPage/>}/>
       <Route path="/doctor/list/:departmentId" element={<DoctorListpage/>}/>
       <Route path="/doctor/details/:doctorId" element={<DoctorDetailPage/>}/>
       <Route path='/success' element={<BookingSuccessPage/>}/>
       <Route path='/bookings' element={<UserBookingPage/>}/>
       <Route path='/chat/:user_id/:profileId' element={<UserChatPage/>}/>
       <Route path='/health_report/:booking_id' element={<UserHelathReportPage/>}/>
    </Routes>
  )
}
