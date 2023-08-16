import React from 'react'
import Navbar from '../../components/user/common/Navbar'
import { DoctorSideBar } from '../../components/doctor/DoctorSideBar'
import { DoctorRevenue } from '../../components/doctor/DoctorRevenue'

export const DoctorReveneuPage = () => {
  return (
   <>
    <Navbar/>
    <div className='flex'>
      <DoctorSideBar/>
      <DoctorRevenue/>
    </div>
   </>
  )
}
