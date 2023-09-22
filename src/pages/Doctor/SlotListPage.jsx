import React from 'react'
import { DoctorNavBar } from '../../components/doctor/DoctorNavBar'
import { DoctorSideBar } from '../../components/doctor/DoctorSideBar'
import { DoctorSlotList } from '../../components/doctor/DoctorSlotList'

export const SlotListPage = () => {
  return (
    <>
      <DoctorNavBar/>
      <div className='flex'>
      <DoctorSideBar/>
      <div className='flex-1'>
      <DoctorSlotList/>
      </div>

      </div>
    </>
  )
}
