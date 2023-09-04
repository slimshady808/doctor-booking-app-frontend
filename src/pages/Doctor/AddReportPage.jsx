import React from 'react'
import { AddReport } from '../../components/doctor/AddReport'
import { DoctorSideBar } from '../../components/doctor/DoctorSideBar'
import Navbar from '../../components/user/common/Navbar'
import { DoctorNavBar } from '../../components/doctor/DoctorNavBar'

export const AddReportPage = () => {
  return (
    <>
    <DoctorNavBar/>
      {/* <Navbar/> */}
      <div className='flex'>
      <DoctorSideBar/>
      <AddReport/>
      </div>
    </>
  )
}
