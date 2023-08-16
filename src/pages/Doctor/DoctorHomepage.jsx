import React from 'react'
import Navbar from '../../components/user/common/Navbar'
import Banner from '../../components/banner'
import PendingList from '../../components/doctor/PendingList'
import { DoctorSideBar } from '../../components/doctor/DoctorSideBar'

export const DoctorHomepage = () => {
  return (
    <>
    <Navbar/>
    <div style={{display:'flex'}}>
    <DoctorSideBar/>
    <PendingList/>
    </div>
    </>
  )
}
