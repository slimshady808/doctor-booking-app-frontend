import React from 'react'
import Navbar from '../../components/user/common/Navbar'
import { DoctorSideBar } from '../../components/doctor/DoctorSideBar'
import { AddTestResult } from '../../components/doctor/AddTestResult'
import { DoctorNavBar } from '../../components/doctor/DoctorNavBar'

export const AddTestResultPage = () => {
  return (
    <>
    <DoctorNavBar/>
      <div className='flex'>
      <DoctorSideBar/>
      <AddTestResult/>

      </div>
    </>
  )
}
