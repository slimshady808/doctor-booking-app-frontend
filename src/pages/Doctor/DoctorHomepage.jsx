import React from 'react'
import Navbar from '../../components/user/common/Navbar'
import Banner from '../../components/banner'
import PendingList from '../../components/doctor/PendingList'

export const DoctorHomepage = () => {
  return (
    <>
    <Navbar/>
    
    <PendingList/>
    </>
  )
}
