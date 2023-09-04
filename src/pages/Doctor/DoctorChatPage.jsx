import React from 'react'
import { DoctorChat } from '../../components/doctor/DoctorChat'
import { DoctorNavBar } from '../../components/doctor/DoctorNavBar'

export const DoctorChatPage = () => {
  return (
    <>
    <DoctorNavBar/>
      <DoctorChat/>
    </>
  )
}
