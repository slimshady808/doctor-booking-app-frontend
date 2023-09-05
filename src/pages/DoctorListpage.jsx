import React from 'react'

import { DoctorList } from '../components/DoctorList'
import Navbar from '../components/user/common/Navbar'
import { UserNavBar } from '../components/user/common/UserNavBar'

export const DoctorListpage = () => {
  return (
    <>
    <UserNavBar/>
    {/* <Navbar/> */}
    <DoctorList/>
    </>
  )
}
