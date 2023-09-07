import React from "react";
import {Route,Routes} from 'react-router-dom'
import { DoctorHistoryPage } from "../pages/Doctor/DoctorHistoryPage";
import { DoctorAddSlotPage } from "../pages/Doctor/DoctorAddSlotPage";
import DoctorReviewPage from "../pages/Doctor/DoctorReviewPage";
import { AddReportPage } from "../pages/Doctor/AddReportPage";
import { AddTestResultPage } from "../pages/Doctor/AddTestResultPage";
import { DoctorChatPage } from "../pages/Doctor/DoctorChatPage";
import { EditProfilePage } from "../pages/Doctor/EditProfilePage";
// import { DoctorReveneuPage } from "../pages/Doctor/DoctorReveneuPage";



export const DoctorRoutes = () => {

  return (
   <Routes>
    <Route path="/history" element={<DoctorHistoryPage/>}/>
    <Route path="/addSlot" element={<DoctorAddSlotPage/>}/>
    <Route path="/review" element={<DoctorReviewPage/>}/>
    <Route path="/addReport/:bookingId/:patientId/:doctorId" element={<AddReportPage/>}/>
    <Route path="/addTest/:bookingId/:patientId/:doctorId" element={<AddTestResultPage/>} />
    <Route path="/chat/:userId/:doctorId" element={<DoctorChatPage/>} />
    <Route path="/edit-profile"element={<EditProfilePage/>}/>
   </Routes>
  )
}
