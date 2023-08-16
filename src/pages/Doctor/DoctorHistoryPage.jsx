import React from 'react'
import { DoctorSideBar } from '../../components/doctor/DoctorSideBar'
import Navbar from '../../components/user/common/Navbar'
import { DoctorHistory } from '../../components/doctor/DoctorHistory'

export const DoctorHistoryPage = () => {
  return (
    <>
      <Navbar/>
      <div className='flex'>
      <DoctorSideBar/>
      <DoctorHistory/>
      </div>
    </>
  )
}
