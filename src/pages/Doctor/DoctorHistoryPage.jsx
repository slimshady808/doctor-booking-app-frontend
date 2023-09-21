import React from 'react'
import { DoctorSideBar } from '../../components/doctor/DoctorSideBar'

import { DoctorHistory } from '../../components/doctor/DoctorHistory'
import { DoctorNavBar } from '../../components/doctor/DoctorNavBar'

export const DoctorHistoryPage = () => {
  return (
    <>
    <DoctorNavBar/>
 
      <div className='flex'>
      <DoctorSideBar/>
      <DoctorHistory/>
      </div>
    </>
  )
}
