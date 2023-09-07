import React from 'react'

import Navbar from '../../components/user/common/Navbar'
import { UserNavBar } from '../../components/user/common/UserNavBar'
import { DoctorList } from '../../components/user/DoctorList'

export const DoctorListpage = () => {
  return (
    <>
    <UserNavBar/>
    {/* <Navbar/> */}
<DoctorList/>
    </>
  )
}
