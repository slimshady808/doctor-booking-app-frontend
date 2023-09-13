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
import { DepartmentPage } from '../pages/Admin/DepartmentPage';
import { QualificationPage } from '../pages/Admin/QualificationPage';
import { TestTitlesPage } from '../pages/Admin/TestTitlesPage';
import { AddDepartmentPage } from '../pages/Admin/AddDepartmentPage';
import { EditDepartmentPage } from '../pages/Admin/EditDepartmentPage';
import { AddQualificationPage } from '../pages/Admin/AddQualificationPage';
import { EditQualificationPage } from '../pages/Admin/EditQualificationPage';
import { AddTestTitlesPage } from '../pages/Admin/AddTestTitlesPage';
import { EditTestTitlesPage } from '../pages/Admin/EditTestTitlesPage';
import { DashBoard } from '../components/admin/DashBoard';

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
      <Route path="/department" element={<DepartmentPage/>}/>
      <Route path="/qualification" element={<QualificationPage/>}/>
      <Route path="/test_titles" element={<TestTitlesPage/>}/>
      <Route path="/add_department" element={<AddDepartmentPage/>}/>
      <Route path="/edit_department/:id" element={<EditDepartmentPage/>}/>
      <Route path="/add_qualification" element={<AddQualificationPage/>}/>
      <Route path="/edit_qualification/:id" element={<EditQualificationPage/>}/>
      <Route path="/add_test_title" element={<AddTestTitlesPage/>}/>
      <Route path="/edit_test_title/:id" element={<EditTestTitlesPage/>}/>
      <Route path="/details" element={<DashBoard/>}/>



      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};



