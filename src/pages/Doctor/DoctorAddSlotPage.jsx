import React from 'react'
import Navbar from '../../components/user/common/Navbar'
import { DoctorSideBar } from '../../components/doctor/DoctorSideBar'
import { DoctorAddSlot } from '../../components/doctor/DoctorAddSlot'
import { DoctorSlotList } from '../../components/doctor/DoctorSlotList'

export const DoctorAddSlotPage = () => {
  return (
  <>
    <Navbar/>
    <div className='flex'>
      <DoctorSideBar/>
      <DoctorSlotList/>
      <DoctorAddSlot/>
    </div>
  </>
  )
}
