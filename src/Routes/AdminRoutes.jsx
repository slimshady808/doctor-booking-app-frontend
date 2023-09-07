import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { DoctorEditPage } from '../pages/Admin/DoctorEditPage';
import { AddDoctorPage } from '../pages/Admin/AddDoctorPage';
import { DoctorManagementPage } from '../pages/Admin/DoctorManagementPage';
import { AllBookingPage } from '../pages/Admin/AllBookingPage';
import { ViewReportPage } from '../pages/Admin/ViewReportPage';
import { UserListPage } from '../pages/Admin/UserListPage';

export const AdminRoutes = () => {
  
  return (
    <Routes>
      <Route path="/doctor_management" element={<DoctorManagementPage />} />
      <Route path="/doctor_edit/:doctorId" element={<DoctorEditPage />} />
      <Route path="/add_doctor" element={<AddDoctorPage />} />
      <Route path="/all_booking" element={<AllBookingPage />} />
      <Route path="/view/report/:booking_id" element={<ViewReportPage/>}/>
      <Route path="/user/list" element={<UserListPage/>}/>
    </Routes>
  );
};



