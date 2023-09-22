import React from 'react'

import { DoctorSideBar } from '../../components/doctor/DoctorSideBar'
import { DoctorAddSlot } from '../../components/doctor/DoctorAddSlot'

import { DoctorNavBar } from '../../components/doctor/DoctorNavBar'

export const DoctorAddSlotPage = () => {
  return (
  <>
  <DoctorNavBar/>

    <div className='flex'>
      <DoctorSideBar/>
  
      <DoctorAddSlot/>
    </div>
  </>
  )
}
