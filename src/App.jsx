import { useState } from 'react'
import { HomePage } from './pages/HomePage';
import { DoctorListpage } from './pages/DoctorListpage';
import {LoginPage} from './pages/LoginPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {SignUp} from './pages/SignUp'

import { PrivateRoute } from './utils/PrivateRoute';
import { DoctorLogin } from './pages/Doctor/DoctorLogin';
import { DoctorHomepage } from './pages/Doctor/DoctorHomepage';
import { DoctorsFullPage } from './pages/DoctorsFullPage';
import { DoctorManagementPage } from './pages/Admin/DoctorManagementPage';
import { DoctorEditPage } from './pages/Admin/DoctorEditPage';
import { EditAddress } from './components/admin/EditAddress';
import { AddDoctorPage } from './pages/Admin/AddDoctorPage';
import { DoctorDetailPage } from './pages/DoctorDetailPage';
import { BookingSuccessPage } from './pages/BookingSuccessPage';
import { DoctorHistoryPage } from './pages/Doctor/DoctorHistoryPage';
import { DoctorAddSlotPage } from './pages/Doctor/DoctorAddSlotPage';
import { DoctorReveneuPage } from './pages/Doctor/DoctorReveneuPage';
import { UserBookingPage } from './pages/UserBookingPage';
import { AddReportPage } from './pages/Doctor/AddReportPage';
import { AddTestResult } from './components/doctor/AddTestResult';
import { AddTestResultPage } from './pages/Doctor/AddTestResultPage';
import DoctorReviewPage from './pages/Doctor/DoctorReviewPage';
import { UserChatPage } from './pages/UserChatPage';
import { DoctorChatPage } from './pages/Doctor/DoctorChatPage';
import { OTP } from './components/user/OTP';
import { UserHelathReportPage } from './pages/UserHelathReportPage';

function App() {


  return (
      <>
<Router>
    <Routes>
    <Route path='/' exact element={<PrivateRoute/>}>
            <Route exact path='/' element={<HomePage />} />
    </Route>
    
    <Route Component={SignUp} path='/signup'/>
    <Route Component={LoginPage} path='/login'/>
    <Route Component={OTP} path='/otp'/>
    <Route Component={DoctorListpage} path='/doctor_list/:departmentId/'/>
    <Route Component={DoctorsFullPage} path='/doctor_full_list'/>
    <Route Component={DoctorDetailPage} path='/doctor_details/:doctorId'/>
    <Route Component={BookingSuccessPage} path='/success'/>
    <Route Component={UserBookingPage} path='/bookings_list'/>
    <Route Component={UserChatPage} path='/user_chat/:doctorId/:profileId'/>
    <Route Component={UserHelathReportPage} path='/user/health_report/:booking_id'/>




    <Route Component={DoctorLogin} path='/doctor_login'/>
    <Route Component={DoctorHomepage} path='/doctor/home'/>
    {/* <Route Component={DoctorHomepage} path='/doctor_home'/> */}
    <Route Component={DoctorHistoryPage} path='/doctor/history'/>
    <Route Component={DoctorAddSlotPage} path='/doctor/addSlot'/>
    <Route Component={DoctorReveneuPage} path='/doctor/revenue'/>
    <Route Component={DoctorReviewPage} path='/doctor/review'/>
    <Route Component={AddReportPage} path='/doctor/addReport/:bookingId/:patientId/:doctorId'/>
    <Route Component={AddTestResultPage} path='/doctor/addTest/:bookingId/:patientId/:doctorId'/>
    <Route Component={DoctorChatPage} path='/doctor_chat/:userId/:doctorId'/>



    
    <Route Component={DoctorManagementPage} path='/doctor_management'/>
    <Route Component={DoctorEditPage} path='/doctor_edit/:doctorId'/>

    <Route Component={AddDoctorPage} path='/add_doctor'/>

   


    </Routes>
 </Router>






      </>
     );
    };
       
     

export default App
