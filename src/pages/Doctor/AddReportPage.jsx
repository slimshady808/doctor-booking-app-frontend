import React from 'react'
import { AddReport } from '../../components/doctor/AddReport'
import { DoctorSideBar } from '../../components/doctor/DoctorSideBar'
import Navbar from '../../components/user/common/Navbar'

export const AddReportPage = () => {
  return (
    <>
      <Navbar/>
      <div className='flex'>
      <DoctorSideBar/>
      <AddReport/>
      </div>
    </>
  )
}
