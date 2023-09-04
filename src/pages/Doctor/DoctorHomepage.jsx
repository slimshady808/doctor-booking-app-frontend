import React from 'react'
import Navbar from '../../components/user/common/Navbar'
import Banner from '../../components/banner'
import PendingList from '../../components/doctor/PendingList'
import { DoctorSideBar } from '../../components/doctor/DoctorSideBar'
import { DoctorNavBar } from '../../components/doctor/DoctorNavBar'

export const DoctorHomepage = () => {
  return (
    <>
    <DoctorNavBar/>
    {/* <Navbar/> */}
    <div style={{display:'flex'}}>
    <DoctorSideBar/>
    <PendingList/>
    </div>
    </>
  )
}
