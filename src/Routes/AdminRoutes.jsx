import React from 'react';
import { Route, Routes } from 'react-router-dom';
import jwt_decode from "jwt-decode"
import { DoctorEditPage } from '../pages/Admin/DoctorEditPage';
import { AddDoctorPage } from '../pages/Admin/AddDoctorPage';
import { DoctorManagementPage } from '../pages/Admin/DoctorManagementPage';
import { AllBookingPage } from '../pages/Admin/AllBookingPage';
import { ViewReportPage } from '../pages/Admin/ViewReportPage';
import { UserListPage } from '../pages/Admin/UserListPage';
import { getAccessToken } from '../helpers/auth';
import { LoginPage } from '../pages/LoginPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const AdminRoutes = () => {

  const authToken = getAccessToken()

  if(!authToken){
    console.log('no token')
    return <LoginPage/>
  }
  const decode= jwt_decode(authToken);

  if (decode.role !== "admin"){
    console.log('not admin')
    return <LoginPage/>
  }
  
  return (
    <Routes>
      <Route path="/doctor_management" element={<DoctorManagementPage />} />
      <Route path="/doctor_edit/:doctorId" element={<DoctorEditPage />} />
      <Route path="/add_doctor" element={<AddDoctorPage />} />
      <Route path="/all_booking" element={<AllBookingPage />} />
      <Route path="/view/report/:booking_id" element={<ViewReportPage/>}/>
      <Route path="/user/list" element={<UserListPage/>}/>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};



