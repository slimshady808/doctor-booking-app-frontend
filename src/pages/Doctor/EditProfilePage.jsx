import React from 'react'
import { Profile } from '../../components/doctor/Profile'
import { DoctorSideBar } from '../../components/doctor/DoctorSideBar'
import { DoctorNavBar } from '../../components/doctor/DoctorNavBar'

export const EditProfilePage = () => {
  return (
    <>
   <DoctorNavBar/>
      <Profile/>
    </>
  )
}
