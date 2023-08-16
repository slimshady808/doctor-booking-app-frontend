import React from 'react'
import Navbar from '../../components/user/common/Navbar'
import { DoctorSideBar } from '../../components/doctor/DoctorSideBar'
import { AddTestResult } from '../../components/doctor/AddTestResult'

export const AddTestResultPage = () => {
  return (
    <>
      <Navbar/>
      <div className='flex'>
      <DoctorSideBar/>
      <AddTestResult/>

      </div>
    </>
  )
}
