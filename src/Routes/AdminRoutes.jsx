import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { DoctorEditPage } from '../pages/Admin/DoctorEditPage';
import { AddDoctorPage } from '../pages/Admin/AddDoctorPage';
import { DoctorManagementPage } from '../pages/Admin/DoctorManagementPage';

export const AdminRoutes = () => {
  
  return (
    <Routes>
      <Route path="/doctor_management" element={<DoctorManagementPage />} />
      <Route path="/doctor_edit/:doctorId" element={<DoctorEditPage />} />
      <Route path="/add_doctor" element={<AddDoctorPage />} />
    </Routes>
  );
};



