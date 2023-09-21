import React from 'react'
import { AddReport } from '../../components/doctor/AddReport'
import { DoctorSideBar } from '../../components/doctor/DoctorSideBar'

import { DoctorNavBar } from '../../components/doctor/DoctorNavBar'

export const AddReportPage = () => {
  return (
    <>
    <DoctorNavBar/>

      <div className='flex'>
      <DoctorSideBar/>
      <AddReport/>
      </div>
    </>
  )
}
