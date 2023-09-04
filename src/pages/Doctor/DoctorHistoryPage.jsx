import React from 'react'
import { DoctorSideBar } from '../../components/doctor/DoctorSideBar'
import Navbar from '../../components/user/common/Navbar'
import { DoctorHistory } from '../../components/doctor/DoctorHistory'
import { DoctorNavBar } from '../../components/doctor/DoctorNavBar'

export const DoctorHistoryPage = () => {
  return (
    <>
    <DoctorNavBar/>
      {/* <Navbar/> */}
      <div className='flex'>
      <DoctorSideBar/>
      <DoctorHistory/>
      </div>
    </>
  )
}
