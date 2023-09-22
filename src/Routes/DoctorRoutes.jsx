import React from "react";
import jwt_decode from "jwt-decode"
import {Navigate, Route,Routes} from 'react-router-dom'
import { DoctorHistoryPage } from "../pages/Doctor/DoctorHistoryPage";
import { DoctorAddSlotPage } from "../pages/Doctor/DoctorAddSlotPage";
import DoctorReviewPage from "../pages/Doctor/DoctorReviewPage";
import { AddReportPage } from "../pages/Doctor/AddReportPage";
import { AddTestResultPage } from "../pages/Doctor/AddTestResultPage";
import { DoctorChatPage } from "../pages/Doctor/DoctorChatPage";
import { EditProfilePage } from "../pages/Doctor/EditProfilePage";
import { getAccess, getAccessToken, getLocal } from "../helpers/auth";
import { LoginPage } from "../pages/LoginPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { SlotListPage } from "../pages/Doctor/SlotListPage";
// import { DoctorReveneuPage } from "../pages/Doctor/DoctorReveneuPage";



export const DoctorRoutes = () => {

  const authToken = getAccessToken()

  if(!authToken){
    console.log('no token')
    return <LoginPage/>
  }
  const decode= jwt_decode(authToken);

  if (decode.role !== "doctor"){
    console.log('not doctor')
    return <LoginPage/>
  }



  return (
   <Routes>
    <Route path="/history" element={<DoctorHistoryPage/>}/>
    <Route path="/addSlot" element={<DoctorAddSlotPage/>}/>
    <Route path="/slot" element={<SlotListPage/>}/>
    <Route path="/review" element={<DoctorReviewPage/>}/>
    <Route path="/addReport/:bookingId/:patientId/:doctorId" element={<AddReportPage/>}/>
    <Route path="/addTest/:bookingId/:patientId/:doctorId" element={<AddTestResultPage/>} />
    <Route path="/chat/:userId/:doctorId" element={<DoctorChatPage/>} />
    <Route path="/edit-profile"element={<EditProfilePage/>}/>
    <Route path="*" element={<NotFoundPage />} />
   </Routes>
  )
}
